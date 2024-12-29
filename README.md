Current Database Schema

![Screenshot 1](screenshots/schema.png)



```
pusatoleholeh-backend-tim
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ 2be233c43f711d9fe9f96e3877f27ded4e044d
│  │  ├─ 01
│  │  │  └─ 17b5113d5cfdd4544dbdd05dd9053c7bc2b19d
│  │  ├─ 02
│  │  │  └─ 42c23cee2c17c4b56a86a0ec0c6ffbd9d82e84
│  │  ├─ 06
│  │  │  └─ 079bd201eb34dbb62ae664da40d970b9137727
│  │  ├─ 0b
│  │  │  └─ 2e32682b451f4c7f8650928179ba409e798f51
│  │  ├─ 0c
│  │  │  └─ 2c730605dc1326b960ca701f7b6b598509cbe8
│  │  ├─ 0e
│  │  │  └─ 0b36754bcceb8b1bedaec9dfaa436686086695
│  │  ├─ 11
│  │  │  ├─ 3bf2dfcf363527b2ed2df6f527655848fa1b3e
│  │  │  └─ c330b199f1a044d935eb2ad62056e9a4628d22
│  │  ├─ 15
│  │  │  └─ 41132df05bad2a87f9a553297a87274a85ae74
│  │  ├─ 16
│  │  │  ├─ 595548489e6d7dd7077fd97a36f329d7b9bed5
│  │  │  ├─ 85fe3779d97baf6e1c7e9d0a0a48c7ffa6a89e
│  │  │  └─ f4082a33418c6ff95b8845a6489ae4b3b01d03
│  │  ├─ 18
│  │  │  └─ 9e6bf7b8559a8687fc9b2897fcf6ed8e3c4c7b
│  │  ├─ 1a
│  │  │  └─ 4593ac2a52473e909ec9cc78edc8a8dfa2a897
│  │  ├─ 1b
│  │  │  └─ 50331a38d52bc2b35e936c314f26f8897e9930
│  │  ├─ 1d
│  │  │  ├─ ca9a14bb9342ca603d2c6acd3d619c7e750a49
│  │  │  └─ d095a5564b6c96895ad527991114101c9fa7e2
│  │  ├─ 20
│  │  │  └─ a7f23c06a10f6537f782eb0743b5063ac5fbe3
│  │  ├─ 22
│  │  │  └─ 4806c84461904db753a21f2b6b380bb2db29d4
│  │  ├─ 23
│  │  │  └─ 44fd05c24843f637f541adfb88e78dc8273bb9
│  │  ├─ 24
│  │  │  ├─ 7a5ae9b2b8b9d9bd8d806339d18bc0b8dfbfab
│  │  │  └─ f78b33f316091e50133301965e0c7e183ec3bc
│  │  ├─ 27
│  │  │  └─ 81806fb160b7723c759541850c208e3f99f61f
│  │  ├─ 29
│  │  │  ├─ 4eaf35557736b74a9fa20c0fb6906eb2d9baca
│  │  │  └─ 6f6198b3a2222889b8f088b2dbd5b1d0c1c326
│  │  ├─ 2b
│  │  │  └─ dccc1eff0135589c3848db810c20679871f16a
│  │  ├─ 2c
│  │  │  └─ e68a6f22407e733ae46c21b8832e545aa1cba6
│  │  ├─ 2e
│  │  │  └─ 84ee7111502fb470b4d4253cdeac0879d4f6f7
│  │  ├─ 31
│  │  │  └─ 1ea657bb6d6c0ceee26172686c132eabba41cf
│  │  ├─ 32
│  │  │  └─ d8aa7bdcbc0cd628b46238b1637b8349be7c33
│  │  ├─ 35
│  │  │  └─ 24caf322b7ded268e5e2437e6e562a9ed24adc
│  │  ├─ 36
│  │  │  └─ 9145e6d5e23b8e1e121a666fea6df26cc6c326
│  │  ├─ 38
│  │  │  └─ 14de71025d80f4d06e15ba23fde674586fc273
│  │  ├─ 3e
│  │  │  └─ 068984c0aa818851aae2a174102a98f07d01d4
│  │  ├─ 3f
│  │  │  └─ 41110d1d4e88ed2aba81cbf8b76e32db0b09e7
│  │  ├─ 43
│  │  │  └─ 140877d9a81b29128a9b438125567bb85511f9
│  │  ├─ 45
│  │  │  ├─ 9fa4401d26197b93567a63446756693d3388bb
│  │  │  └─ a9670ff2e9de31ce400f12b29d015941013c62
│  │  ├─ 47
│  │  │  └─ 1bd9d4352d81ba12df1c62d541125188b05360
│  │  ├─ 48
│  │  │  └─ 7b87c555121460dd1da946afcba37c1560b082
│  │  ├─ 4b
│  │  │  └─ b026e3b4fbc4f37381c2183e3956daa75e5113
│  │  ├─ 51
│  │  │  └─ a152311fc81eb346a6c66ee05b09fe1200f1d7
│  │  ├─ 53
│  │  │  └─ 714d1101f7a412515abf1d0c29ceb0c70164bb
│  │  ├─ 54
│  │  │  ├─ 84ba2fc81a9ae2560bc69fffeeda09b3c7818d
│  │  │  └─ e6668d66309d345ab8d871ca8dcb7d4f2abe1f
│  │  ├─ 55
│  │  │  └─ 701373db7ab653ec628aedc7295d19597ec924
│  │  ├─ 56
│  │  │  └─ d39960b1aaae2e7644cdcc285c6755efaa546a
│  │  ├─ 59
│  │  │  ├─ 06cf6e8fa9b8eb29a952c8d2011d638bf69369
│  │  │  └─ 28a5478e481155dfd4f57f663a7c3d2eb9ff14
│  │  ├─ 5a
│  │  │  └─ 41cfe864becb0e7af795cd27463e190c0547c0
│  │  ├─ 5d
│  │  │  └─ cd40bcf93ab4a280cea47725b8c6949d2e3718
│  │  ├─ 5f
│  │  │  └─ 9845beee2419304341eaa32348cb6a731f1f60
│  │  ├─ 63
│  │  │  ├─ 4785aee43651925cfb0f209e14d9c3bb12f000
│  │  │  ├─ 4c809a2ca1b8afce85a78b27a02ab9ea995e49
│  │  │  └─ ac29d2b6a89f7090f5d99b6a0685acebd31d71
│  │  ├─ 64
│  │  │  ├─ 076eb060467b3190e579444286eef5023a8150
│  │  │  └─ be12ea3798d5a06962f0c20eea1ae3aadcfe25
│  │  ├─ 67
│  │  │  └─ eec217e146e446b08e5d6eed3b8dcee78bb893
│  │  ├─ 68
│  │  │  └─ 79e320187176bd32f6c7d09f6a438b183b29f7
│  │  ├─ 70
│  │  │  └─ ebd8bb4f695875be7942e6aed0fe204e4fb278
│  │  ├─ 72
│  │  │  └─ 35588ead42d1bd1cd438161b6ae9bb4f8f28a2
│  │  ├─ 74
│  │  │  └─ a53122610c9bc840891acda5e473122ac546d5
│  │  ├─ 77
│  │  │  └─ 802f092ae28be3600a13e9cb8d185bb3e851ee
│  │  ├─ 79
│  │  │  ├─ f1eceb2d24e4c72053f1ae3318a048dacee750
│  │  │  └─ f7886e3ad3a34be267dd4271b8e1cd403f7e0f
│  │  ├─ 7a
│  │  │  └─ a64c4e39620249a3f005ad87f2c4f28b66f39c
│  │  ├─ 7b
│  │  │  └─ 25a14590b180e1be0b4ac7722d680fcb19d69b
│  │  ├─ 82
│  │  │  └─ cece0a24c64e621d6c901a2352c7e9ee022cfe
│  │  ├─ 83
│  │  │  └─ 8b1d38c4e9980e5fe2398a56c68deee32d828f
│  │  ├─ 84
│  │  │  ├─ 12ade6caabc7ea2735133bd6705a63c7129de6
│  │  │  └─ 4691195516327ff42180d8e49a16d5b2b03e6f
│  │  ├─ 85
│  │  │  └─ ae3d27c90182e8373105dc7a71acf9fc43cc0b
│  │  ├─ 86
│  │  │  └─ 8a030935207aae88d525b53603cc6c107a8fe3
│  │  ├─ 8b
│  │  │  └─ 26fbcbb298647c99ccba9acb89da9ef618efa0
│  │  ├─ 8f
│  │  │  ├─ 427f2215e318df274beb5ff16862d2ebacba6c
│  │  │  ├─ 86d3fd24427319f8c6b4edb71f43c3ae309fa4
│  │  │  └─ c1dba9699c4ab83e31e23960401d257ea76882
│  │  ├─ 91
│  │  │  └─ dfc725abde431d6ac75703620dd53534859dbe
│  │  ├─ 96
│  │  │  └─ f9aeaea43738225dbf8a627e75c9ff5c4b1a92
│  │  ├─ 97
│  │  │  └─ dc599b53da9b6c71b63731e21922bbb1f7398c
│  │  ├─ 99
│  │  │  └─ 43a158d88134ccbca4bff30505414833db5efc
│  │  ├─ a1
│  │  │  ├─ 7d21f80841a15178745f2da4d4291fa296af0c
│  │  │  └─ f0d84f9953a810850bf02d70dfb6347314d878
│  │  ├─ a7
│  │  │  ├─ 120ca4ca8482aa381985602063581dd2527ebf
│  │  │  └─ 5f847c0f8d3fb2517a8e0be80c734e6cec243b
│  │  ├─ a9
│  │  │  └─ 070c2890a18b6304edbabca41cd088a2877fee
│  │  ├─ ac
│  │  │  └─ 3a24fb35a6f440a2b5eac448e9b53f14d38541
│  │  ├─ af
│  │  │  └─ 3233793c7c0f40c55dda84fe72389059a2b14d
│  │  ├─ b5
│  │  │  └─ bb07819f2b3d4f3c5d1886963f4d7275954149
│  │  ├─ b7
│  │  │  └─ 5ac23ce6a001315736125a2c91a6170e192403
│  │  ├─ be
│  │  │  └─ 0001c076b1f02787681ff156d29613adac0d07
│  │  ├─ c2
│  │  │  └─ 8596d5a70db6a6022933d0671f2a0a6add1849
│  │  ├─ ca
│  │  │  └─ 5ce0de1963ece3fdbe3073e987baded7c12e35
│  │  ├─ cc
│  │  │  └─ f1948671c00112e6c6d67a2b7fabe0d31f2cb3
│  │  ├─ ce
│  │  │  └─ 94f1ee2912e7abaff20dab949bfa10df9b021a
│  │  ├─ d2
│  │  │  └─ c62ee15f652535642b5fd3a3f8dd80eff6dfcf
│  │  ├─ d8
│  │  │  ├─ 71b8d74de4c67b1461bd6612487eb34c2fd47b
│  │  │  ├─ 8c919a73ed2635f936ea4c0d1f9cd52efeba16
│  │  │  └─ fd50dd7f8e013803e49ba807d5f9d597eef67f
│  │  ├─ d9
│  │  │  └─ 280f0c6c581debd4609d2d2e1f78549b74653d
│  │  ├─ dc
│  │  │  └─ 58a7d3fdbdb6542eb4e401427a39dc92808161
│  │  ├─ dd
│  │  │  └─ dbfafc9ed761b3182cd2a433a098d1687fa9a4
│  │  ├─ df
│  │  │  └─ eca506f849f2cc282d0f348ba4f90a4584f12e
│  │  ├─ e0
│  │  │  └─ 18292ce8c164009d953cde5db9806cbf8d43fb
│  │  ├─ e2
│  │  │  └─ a682aa9ac48a932ea272f0e8f15d27df53efd3
│  │  ├─ e6
│  │  │  ├─ 580983a25bdb59101f16328754a33229007426
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ e8
│  │  │  └─ d2c771da17a9075308f1f99fc21880552d0168
│  │  ├─ eb
│  │  │  └─ 85fa73f4377b98300d41e89546e6a28c840bc2
│  │  ├─ ec
│  │  │  ├─ 2bab055abffb05929561e18de54fd43bcd9e3c
│  │  │  └─ 3fb58f7898c9bc9ba657529b288b6d3cc981ba
│  │  ├─ ed
│  │  │  └─ 8009685dcc21d5ce56b13e7e9d5098ec94bf8c
│  │  ├─ f8
│  │  │  └─ 60b589d80dd646f009b5430fb2e5de156d1709
│  │  ├─ fa
│  │  │  └─ 7442863c7d1b497053b6ce3833846bca6ca8af
│  │  ├─ fc
│  │  │  └─ 9c27e48d592556310f804c1119722ab3e5ef5b
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-5ce76f3fa6ec65c5c36f2d1028495d24cf0e9d22.idx
│  │     ├─ pack-5ce76f3fa6ec65c5c36f2d1028495d24cf0e9d22.pack
│  │     └─ pack-5ce76f3fa6ec65c5c36f2d1028495d24cf0e9d22.rev
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  ├─ origin
│     │  │  ├─ HEAD
│     │  │  └─ main
│     │  └─ remote
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ diagram
├─ package-lock.json
├─ package.json
├─ README.md
├─ screenshots
│  └─ schema.png
└─ src
   ├─ configs
   │  ├─ mongodb.js
   │  └─ passport.js
   ├─ controllers
   │  ├─ alert.js
   │  ├─ auth.js
   │  ├─ cart.js
   │  ├─ courier.js
   │  ├─ product.js
   │  ├─ review.js
   │  ├─ transaction.js
   │  └─ voucher.js
   ├─ middlewares
   │  └─ middleware.js
   ├─ models
   │  ├─ address.js
   │  ├─ alert.js
   │  ├─ article.js
   │  ├─ articleBanner.js
   │  ├─ cart.js
   │  ├─ category.js
   │  ├─ courier.js
   │  ├─ discuss.js
   │  ├─ heroBanner.js
   │  ├─ paymentMethod.js
   │  ├─ product.js
   │  ├─ productCover.js
   │  ├─ productImage.js
   │  ├─ review.js
   │  ├─ shop.js
   │  ├─ shopBanner.js
   │  ├─ shopImage.js
   │  ├─ transaction.js
   │  ├─ transactionStatus.js
   │  ├─ usage.js
   │  ├─ user.js
   │  ├─ userImage.js
   │  └─ voucher.js
   └─ server.js

```