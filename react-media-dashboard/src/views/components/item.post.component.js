import React from 'react';
import { ItemAlbumComponent } from './item.album.component';
import { CommentForm } from './comment.form';
import { ListComponent } from './list.component';
import { CommentComponent } from './comment.component';

export const ItemPostComponent = ({ item, onDetail, isDetail, comments = [], onSendComment = f=>f}) => {

    const _onSendComment = (comment) => {
        comment.postid = item._id;
        onSendComment(comment);
    }

    return (
        <div className="contarner border_bottom">
            <p>{item.content}</p>
            <br />
            {
                isDetail ?
                    null :
                    <button onClick={() => onDetail(item)}>Detail</button>
            }
            {
                item.imageurls && item.imageurls.length ?
                    <ItemAlbumComponent
                        itemSource={item.imageurls}
                    />
                    :
                    null
            }

            <i>create at: {new Date(item.createat).toDateString()}</i>

            {
                item.editat ? <i>eidit at: {item.editat}</i> : null
            }



            {
                isDetail ?
                    <div>
                        <hr />
                        <ListComponent
                            itemSource={comments}
                            renderRows={comment => (
                                <CommentComponent
                                    key={comment._id}
                                    item={comment}
                                />
                            )}
                        />

                        <h1>comment</h1>
                        <CommentForm onSend={_onSendComment} />
                    </div>
                    : null
            }
        </div>
    )
}



