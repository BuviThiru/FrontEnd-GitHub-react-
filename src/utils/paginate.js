export default function paginate(followers){
    const numberOfItemsPerPage = 10;
    const numberOFPages = Math.ceil(followers.length/numberOfItemsPerPage);

    //alloting followers per page..for 1st page its 0-9..start =index*10

    const newFollowers = Array.from({length:numberOFPages},(_,index)=>{
        const start = numberOFPages *index;
        return followers.slice(start,start+numberOfItemsPerPage)
    })
  
    return newFollowers
}