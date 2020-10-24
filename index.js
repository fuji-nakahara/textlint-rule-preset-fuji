"use strict";

const { moduleInterop } = require("@textlint/module-interop");

module.exports = {
    rules: {
        "no-insert-dropping-sa": moduleInterop(require("@textlint-ja/textlint-rule-no-insert-dropping-sa")),
        "no-invalid-control-character": moduleInterop(require("@textlint-rule/textlint-rule-no-invalid-control-character")),
        "no-unmatched-pair": moduleInterop(require("@textlint-rule/textlint-rule-no-unmatched-pair")),
        "ja-hiragana-fukushi": moduleInterop(require("textlint-rule-ja-hiragana-fukushi")),
        "ja-hiragana-hojodoushi": moduleInterop(require("textlint-rule-ja-hiragana-hojodoushi")),
        "ja-hiragana-keishikimeishi": moduleInterop(require("textlint-rule-ja-hiragana-keishikimeishi")),
        "ja-no-abusage": moduleInterop(require("textlint-rule-ja-no-abusage")),
        "ja-no-mixed-period": moduleInterop(require("textlint-rule-ja-no-mixed-period")),
        "ja-no-successive-word": moduleInterop(require("textlint-rule-ja-no-successive-word")),
        "ja-space-after-exclamation": moduleInterop(require("textlint-rule-ja-space-after-exclamation")),
        "ja-space-after-question": moduleInterop(require("textlint-rule-ja-space-after-question")),
        "ja-space-between-half-and-full-width": moduleInterop(require("textlint-rule-ja-space-between-half-and-full-width")),
        "no-doubled-conjunctive-particle-ga": moduleInterop(require("textlint-rule-no-doubled-conjunctive-particle-ga")),
        "no-dropping-the-ra": moduleInterop(require("textlint-rule-no-dropping-the-ra")),
        "no-start-duplicated-conjunction": moduleInterop(require("textlint-rule-no-start-duplicated-conjunction")),
    },
    rulesConfig: {
        // サ抜き、サ入れ表現の誤用をチェックする
        // https://github.com/textlint-ja/textlint-rule-no-insert-dropping-sa
        "no-insert-dropping-sa": true,
        // 不必要な制御文字を使用しない
        // https://github.com/textlint-rule/textlint-rule-no-invalid-control-character
        "no-invalid-control-character": true,
        // 対になっていない括弧をチェックする
        // https://github.com/textlint-rule/textlint-rule-no-unmatched-pair
        "no-unmatched-pair": true,
        // ひらがなで表記したほうが読みやすい副詞を漢字で使用しない
        // https://github.com/lostandfound/textlint-rule-ja-hiragana-fukushi
        "ja-hiragana-fukushi": true,
        // ひらがなで表記したほうが読みやすい補助動詞を漢字で使用しない
        // https://github.com/lostandfound/textlint-rule-ja-hiragana-fukushi
        "ja-hiragana-hojodoushi": true,
        // ひらがなで表記したほうが読みやすい形式名詞を漢字で使用しない
        // https://github.com/lostandfound/textlint-rule-ja-hiragana-keishikimeishi
        "ja-hiragana-keishikimeishi": true,
        // よくある日本語の誤用をチェックする
        // https://github.com/textlint-ja/textlint-rule-ja-no-abusage
        "ja-no-abusage": true,
        // 文末の句点(。)の統一 OR 抜けをチェックする
        // https://github.com/textlint-ja/textlint-rule-ja-no-mixed-period
        "ja-no-mixed-period": true,
        // 同一の単語を間違えて連続しているのをチェックする
        // https://github.com/textlint-ja/textlint-rule-ja-no-successive-word
        "ja-no-successive-word": true,
        // 文末に感嘆符を使用し、後に別の文が続く場合に全角スペースを挿入しているかチェックする
        // https://github.com/textlint-ja/textlint-rule-spacing/blob/master/packages/textlint-rule-ja-space-after-exclamation
        "ja-space-after-exclamation": true,
        // 文末に疑問符を使用し、後に別の文が続く場合に全角スペースを挿入しているかチェックする
        // https://github.com/textlint-ja/textlint-rule-spacing/blob/master/packages/textlint-rule-ja-space-after-question
        "ja-space-after-question": true,
        // 半角文字と全角文字の間にスペースが入っていないことをチェックする
        // https://github.com/textlint-ja/textlint-rule-spacing/tree/master/packages/textlint-rule-ja-space-between-half-and-full-width
        "ja-space-between-half-and-full-width": true,
        // 逆接の接続助詞「が」を連続して使用しない
        // https://github.com/takahashim/textlint-rule-no-doubled-conjunctive-particle-ga
        "no-doubled-conjunctive-particle-ga": true,
        // ら抜き言葉を使用しない
        // https://github.com/textlint-ja/textlint-rule-no-dropping-the-ra
        "no-dropping-the-ra": true,
        // UTF8-MAC 濁点を使用しない
        // https://github.com/azu/textlint-rule-no-nfd
        "no-nfd": true,
        // 同じ接続詞ではじまる文が連続していないかチェックする
        // https://github.com/textlint-rule/textlint-rule-no-start-duplicated-conjunction
        "no-start-duplicated-conjunction": true
    }
};
