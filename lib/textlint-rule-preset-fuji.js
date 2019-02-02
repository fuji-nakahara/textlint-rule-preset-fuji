"use strict";

module.exports = {
  rules: {
    "ja-hiragana-fukushi": require("textlint-rule-ja-hiragana-fukushi"),
    "ja-hiragana-hojodoushi": require("textlint-rule-ja-hiragana-hojodoushi"),
    "ja-hiragana-keishikimeishi": require("textlint-rule-ja-hiragana-keishikimeishi"),
    "ja-no-abusage": require("textlint-rule-ja-no-abusage"),
    "ja-no-mixed-period": require("textlint-rule-ja-no-mixed-period"),
    "ja-no-successive-word": require("textlint-rule-ja-no-successive-word"),
    "ja-space-after-exclamation": require("textlint-rule-ja-space-after-exclamation"),
    "ja-space-after-question": require("textlint-rule-ja-space-after-question"),
    "ja-space-between-half-and-full-width": require("textlint-rule-ja-space-between-half-and-full-width"),
    "no-doubled-conjunction": require("textlint-rule-no-doubled-conjunction"),
    "no-doubled-conjunctive-particle-ga": require("textlint-rule-no-doubled-conjunctive-particle-ga"),
    "no-dropping-the-ra": require("textlint-rule-no-dropping-the-ra"),
    "no-invalid-control-character": require("@textlint-rule/textlint-rule-no-invalid-control-character")
  },
  rulesConfig: {
    // # ひらがなで表記したほうが読みやすい副詞を漢字で使用しない
    // https://github.com/lostandfound/textlint-rule-ja-hiragana-fukushi
    "ja-hiragana-fukushi": true,
    // # ひらがなで表記したほうが読みやすい補助動詞を漢字で使用しない
    // https://github.com/lostandfound/textlint-rule-ja-hiragana-fukushi
    "ja-hiragana-hojodoushi": true,
    // # ひらがなで表記したほうが読みやすい形式名詞を漢字で使用しない
    // https://github.com/lostandfound/textlint-rule-ja-hiragana-keishikimeishi
    "ja-hiragana-keishikimeishi": true,
    // # よくある日本語の誤用をチェックする
    // https://github.com/textlint-ja/textlint-rule-ja-no-abusage
    "ja-no-abusage": true,
    // # 文末の句点(。)の統一 OR 抜けをチェックする
    // https://github.com/textlint-ja/textlint-rule-ja-no-mixed-period
    "ja-no-mixed-period": true,
    // # 同一の単語を間違えて連続しているのをチェックする
    // https://github.com/textlint-ja/textlint-rule-ja-no-successive-word
    "ja-no-successive-word": true,
    // # 文末に感嘆符を使用し、後に別の文が続く場合に全角スペースを挿入しているかチェックする
    // https://github.com/textlint-ja/textlint-rule-spacing/blob/master/packages/textlint-rule-ja-space-after-exclamation
    "ja-space-after-exclamation": true,
    // # 文末に疑問符を使用し、後に別の文が続く場合に全角スペースを挿入しているかチェックする
    // https://github.com/textlint-ja/textlint-rule-spacing/blob/master/packages/textlint-rule-ja-space-after-question
    "ja-space-after-question": true,
    // # 半角文字と全角文字の間にスペースが入っていないことをチェックする
    // https://github.com/textlint-ja/textlint-rule-spacing/tree/master/packages/textlint-rule-ja-space-between-half-and-full-width
    "ja-space-between-half-and-full-width": true,
    // # 同じ接続詞を連続して使用しない
    // https://github.com/takahashim/textlint-rule-no-doubled-conjunction
    "no-doubled-conjunction": true,
    // # 逆接の接続助詞「が」を連続して使用しない
    // https://github.com/takahashim/textlint-rule-no-doubled-conjunctive-particle-ga
    "no-doubled-conjunctive-particle-ga": true,
    // # ら抜き言葉を使用しない
    // https://github.com/textlint-ja/textlint-rule-no-dropping-the-ra
    "no-dropping-the-ra": true,
    // # 不必要な制御文字を使用しない
    // https://github.com/textlint-rule/textlint-rule-no-invalid-control-character
    "no-invalid-control-character": true
  }
};
