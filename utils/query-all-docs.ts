export default async function queryAllDocs(indexPage?: boolean) {
    let query = queryContent("/")
        .only(['_id', '_path', 'title', 'description', 'created', 'updated', 'tags', 'solves', 'points'])
        .where({_extension: {$eq: 'md'}, ...(indexPage ? {created: {$exists: true}} : {})});
    if (indexPage) query = query.sort({created: -1});

    const res = await query.find();
    res.forEach(p => p.title = guessArticleTitle(p));
    return res;
}
