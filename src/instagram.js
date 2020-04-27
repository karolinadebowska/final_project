import InstagramEmbed from 'react-instagram-embed';
import React from 'react';
function Instagram() {
    return (
        <div>
    <InstagramEmbed
        align='right'
        url='https://instagr.am/p/B7YfkGJpjH3/'
        maxWidth={320}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
    />
        </div>)
}
export default Instagram