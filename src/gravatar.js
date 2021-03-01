import crypto from "crypto";
//サインインページで入力されたニックネームが引数に渡され、空白除去、小文字化を行い、md5でハッシュを生成し、digestで適当な16進数を取得。それをgravatarのURLに埋め込んでアイコンを表示させる関数。
export const gravatarPath = (string) => {
    const lowerCaseString = string.trim().toLowerCase();
    const md5 = crypto.createHash('md5');
    const digest = md5.update(lowerCaseString, "binary").digest('hex');
    return `https://www.gravatar.com/avatar/${digest}/?d=robohash`;
};

