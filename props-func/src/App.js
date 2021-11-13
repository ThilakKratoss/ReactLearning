import React from 'react';
import PostDetail from './PostDetail'
import faker from 'faker';

const App = () => {
    return (
        // <PostDetail
        //     author="thilak"

        
        // />
        <div className="ui container comments">
            <div className="ui card">
                <PostDetail 
                    author = "thilak"
                    timeAgo = "today at 12.00 PM"
                    comment = "Just for fun"
                    src = {faker.image.image()}
                />
        </div>
            {/* <div className="ui card">
                <PostDetail 
                    author = "thilak"
                    timeAgo = "today at 12.00 PM"
                    comment = "Just for fun"
                    src = {faker.image.image()}
                />
            </div>
            <div className="ui card">
                <PostDetail 
                    author = "thilak"
                    timeAgo = "today at 12.00 PM"
                    comment = "Just for fun"
                    src = {faker.image.image()}
                />
            </div> */}
        </div>
    )
}


export default App;