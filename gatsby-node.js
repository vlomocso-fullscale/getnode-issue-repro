/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateNode = async ({
    node, 
    actions, 
    createNodeId, 
    createContentDigest,
    getNode,
    store,
    cache,
    getCache,
    getNodesByType,
    reporter,
}) => {
    if(node.heroImage___NODE){
        const heroImage = getNode(node.heroImage___NODE)
        console.log(typeof heroImage)
    }
}
