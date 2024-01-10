export const getcategory = async()=>{
    const res = await fetch('https://the-news-portal-server.vercel.app/categories')
    return  res.json()
}

export const querydata = async(category)=>{
    const res = await fetch(`https://the-news-portal-server.vercel.app/news?category=${category}`)
    return res.json()
}
export const singledata = async(id)=>{
    const res = await fetch(`https://the-news-portal-server.vercel.app/news/${id}`)
    return res.json()
}
export const alldata = async()=>{
    const res = await fetch('https://the-news-portal-server.vercel.app/all-news')
    return res.json()
}