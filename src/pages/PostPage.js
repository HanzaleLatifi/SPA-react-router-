import React from 'react'
import {Link} from 'react-router-dom' 

const items=[
    {name:"post1" , to:"/post/1" } ,
    {name:"post2" , to:"/post/2"},
    {name:"post3" , to:"/post/3"}
    
]

function PostPage(props) {
    const id = props.match.params.id || 1 ; //everyTime id = undifined , we Change to id=1
    

    return (
        <div>
            PostPage {id}
            <br/>
            {JSON.stringify(props.match.params)}
           
        </div>
    )
}

export default PostPage
