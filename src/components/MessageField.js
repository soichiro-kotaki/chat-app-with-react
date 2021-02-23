import React, { useState } from 'react';
import  TextField from '@material-ui/core/TextField';
import { pushMessage } from '../firebase';

const MessageField = ({name, setText, text}) => {
    const [isComposed, setIsComposed] = useState(false);

    return (
        <TextField
            value={text}
            fullWidth={true}
            onChange={(e) => {setText(e.target.value)}}
            onCompositionStart={() => {
                setIsComposed(true);
            }}
            onCompositionEnd={() => {
                setIsComposed(false);
            }}
            onKeyDown={(e) => {
                //編集中のstate変数（isComposed)がtrueの場合は、onKeyDownのenterキークリックによる処理をを発火させない。
                if (isComposed) return;

                const text = e.target.value;
                if (text === '') return;
                //プリベントデフォルトは、その要素が持つ全ての初期イベントを抑止してしまうので、条件分岐などで制御したいイベントを指定する。
                if (e.key === "Enter") {
                    pushMessage({name, text})
                    setText('');
                    e.preventDefault();
                };
            }}
        />
    )
};

export default MessageField;

