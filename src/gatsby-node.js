const fs = require(`fs-extra`);
const path = require('path');
const _ = require('lodash');

exports.sourceNodes = async (
  { actions: { createNode }, createNodeId, createContentDigest, reporter },
  { only, file = './package.json' },
) => {
  if (!fs.existsSync(file)) {
    reporter.panic(`
The path passed to gatsby-source-package does not exist on your file system:
${path}
Please pick a path to an existing directory.
    `);
  }

  if (!path.isAbsolute(file)) {
    file = path.resolve(process.cwd(), file);
  }

  let contents = await fs.readJson(file);

  if (only) {
    contents = _.pick(contents, only);
  }

  createNode({
    ...contents,
    id: createNodeId(JSON.stringify(contents.name ? contents.name : contents)),
    internal: {
      type: 'Package',
      contentDigest: createContentDigest(contents),
    },
  });
};
