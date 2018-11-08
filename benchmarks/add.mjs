// Copyright 2018 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the “License”);
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// <https://apache.org/licenses/LICENSE-2.0>.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const dataBig = [{
  a: '0xffb138b89275b56e0b15de1411babfe86aa0b8f9',
  b: '-0x6e32983068d96df113bfca1f8f8f98439eded6ae9ac02',
  r: '-0x6e328835554de4c9b868e96e31ae5727f2e050048f309'
}, {
  a: '0x95bce6c977afe46f045b7137f8aebc705f13af049d553a3ee2c1935b7589b8aea58f1',
  b: '-0xb8b0fa1852141df69fc24cdc5c9b459833859661e8e5883a976d91bd3d',
  r: '0x95bce6c977a4595f62d64ff61944c04b914de55043d201e57ca30502f1e041d589bb4'
}, {
  a: '0xb5d779ae4a86b7e374a51d8cb876c961ce3a2d5db92',
  b: '0x2b4a11f4bef698289571b5a24be3c6abbc868e39c92c2af88934ca66d8836e6d0b',
  r: '0x2b4a11f4bef698289571b5ada95b619064f20c71137e03c410a16083bc2644489d'
}, {
  a: '0x81044928d6e57aeb454c3f83e3f774fa1669e905ce53d5e57',
  b: '-0x82525086ab1e4122a9604c066f441df2a0775b95f4a67ab9cb0f7efc26f122e65',
  r: '-0x82525086ab1e4122285c02dd985ea3075b2b1c1210af05bfb4a595f6589d4d00e'
}, {
  a: '0x5d61caec70465e28ac220212e04370cbb56a',
  b: '0x59fe8477a73154c482216f56b4d870b7be1df9b6bd9623ecf5c52cde113b634a',
  r: '0x59fe8477a73154c482216f56b4d8ce19890a69fd1bbed00ef7d80d21820718b4'
}, {
  a: '-0xa0772fdda27105e68649b05c5633cd4e2cb2f31b2f8892c93e35dc23da82',
  b: '0x1a9fd0b3a9c8bcf49f741cffd396670076c04aed339f',
  r: '-0xa0772fdda27105e66ba9dfa8ac6b10598d3ed61b5bf22bc8c7759136a6e3'
}, {
  a: '0xf10ae84796ae0e4aa32b3838906d1ff0d543f97fc60560e4bff67597aa1faa26964ba',
  b: '0xd6ef3da27dfa856dd27b7aee7baf15379622f895df4425088bc011',
  r: '0xf10ae84796ae0e58121f1260701576cdfcfba86780f6b45e2225fef59e61faaf524cb'
}, {
  a: '0x6f84646ab03f8a7ced9032b99c0eec768cb8c86f8269f094b049f5437',
  b: '0xf354f05bca8dd6b734db220128ac44cd62d81745de02b94cae',
  r: '0x6f846479e58e9039966d9e2ce9c10c89177d1545afeb64f290758a0e5'
}, {
  a: '-0xfb2aa158eece3f197f703d0d6a518be0d75a1a1babb2bde2101e8241c936f561c8240',
  b: '0x413b5ca04566ca7212a326710690363d174594e96e0e30fb',
  r: '-0xfb2aa158eece3f197f7038f9b487878a6ab2f8f1794bad790cbab0cd6fe85e80e5145'
}, {
  a: '-0x1a729eded5a7c42c4781dff3c91ac0b32b91a1e338c7d909d2207b',
  b: '-0x912f4b0eb62254146083942cef7e92917e510c77cf85f88b0890e92d4c26dc21',
  r: '-0x912f4b0eb63cc6b33f593bf11bc61471721a273882b18a2cebc9b10655f8fc9c'
}, {
  a: '-0x9f43d5c7c5cb290f9b505c1becf2c716f0fbfef1348c8eb97',
  b: '0xe0d8e6676fb609b1b966e3bef780020aadacf5449bbd6',
  r: '-0x9f42f4eedf63b959919ea2b50933cf96eef151443f47f2fc1'
}, {
  a: '-0xd8017d27fa1393b578273c3df4ccfec14fa923444e2d15db800770999872b853d4',
  b: '-0x91c363251170af670f07001a06472b9cda120c3862872566af687bc7fee8320d0',
  r: '-0xe11db35a4b2a9eabe917ac3f9531717b1d4a4407d4558831eafdf85618613b74a4'
}, {
  a: '0xbc3bda65ff70a52a5e000be52c7418f659b830c7bcae69338c4dfdc6f817f644',
  b: '0x582a2ae7a34a863fe5f07cdafcface5437e848a02a9c50f03a0a69f0c5fc1b58941bfd',
  r: '0x582a2ba3df24ec3f5695a738fd06b380ac013ef9e2cd18ace8739d7d13f9e250ac1241'
}, {
  a: '-0x39f00dcd3c47d02852659078194ebe22d7230a77a5c0efbd91',
  b: '0xb1434f5c0a3384fa39ce66651e506bacc925b36ca86',
  r: '-0x39f00dc22812da67af2d40d47c6857d0f21c4fab1365b8f30b'
}, {
  a: '0x6915d3f9e5a9d1890cfb264e3f1bb5da30b092ac2889e309e09927c3d977688',
  b: '0xa36b265f179bf842ce0fcd382e9e86cea2c9a76c949e7edd12d9a5f8b8a166',
  r: '0x734c865fd723910d39dc2321c2059e471add2d22f1d3caf7b1c6c22365017ee'
}, {
  a: '-0xefed3c195ad3e57d6b872fbd3551369788bc86e56',
  b: '-0xa57fc6f0ed2ef0c5d7e4554946b85e9da6df8adb39af35a58ab65ef79d',
  r: '-0xa57fc6f0ed2ef0c5e6e3290adc659cf57d97fdd70d04490f03422765f3'
}, {
  a: '-0xb5807650ba99b99bf810d2a11409228cb0fb8af084cde5f6f0d49fb68e288da19be8',
  b: '-0xd7a5778d7973de074966bcfc6a87ef3a88656b96a067f78588cdb17',
  r: '-0xb5807650ba99c7164f89aa3851e997231ccb519903c18e7d478e09bd0da0e62e76ff'
}, {
  a: '0x6c6e4f1bc2ed5ff01e260e496c451223de13be35',
  b: '-0xebf2d84695ae1b1d23dec6ff06498963b36a83e0106aa4577ee8132eecd7a49abee',
  r: '-0xebf2d84695ae1b1d23dec6ff0642c27ec1ae550a1168c1f69a514eddca99c35edb9'
}, {
  a: '-0xd1536b5a3c790578efe00eb5bb9dc8ce89132',
  b: '0x4c3748cb5c938d899558d806e07c8700fe95d02',
  r: '0x4b65f560025714841c68f7f82ac0e938300cbd0'
}, {
  a: '-0x84fc750b6754300499e15c9d9bde3a3c69a608a75811993065e674c016dd681f73c1',
  b: '0x39e3a3786079c6defdf12654cb4aa277c68a9d17333a961a67c550210b3',
  r: '-0x84fc750b63b5f5cd13d9c02fabff27d71cf15e7fdba8ef5ef2b2cb5e7061131d630e'
}, {
  a: '-0x89666efd81c3db1c1b7c3def907889c54f240cb43',
  b: '-0xb7dfe653ab3f8d34f8b636f5b0ce63ce508b4bf0907ed95b4',
  r: '-0xb7dfe65434a5fc327a7a1211cc4aa1bde103d5b5dfa2e60f7'
}, {
  a: '0xe40b99d4222519ed3e80925e068b96d847a8e9c5346e39584b5e6fb9d08a26029d918d',
  b: '0x37cb7c80d97f964f063a78e21933c95ed08d56fa4c3e63',
  r: '0xe40b99d4222519ed3e80925e3e571359212880143aa8b23a64923918a1177cfce9cff0'
}, {
  a: '0x9f6a00710b5904407b8008cff237e8990415c57',
  b: '-0xee31111d5a9a4499667ca03ebb1e2013635457126d9522a7dbd79e96776d00e391ac10',
  r: '-0xee31111d5a9a4499667ca03ebb1e20096cb45001b804dea023d7119753ee7753504fb9'
}, {
  a: '-0x40c1f67a31e6d72498c30c1ef656f4d6522fa2a543c70790f3',
  b: '-0x64a193067368bf6b85ab528fcea3a4f63375e2a03e41d292af52',
  r: '-0x64e254fced9aa642aa44159bed99fbeb09c81242e385999a4045'
}, {
  a: '-0x135d77caefe1b80472780c262d385e954f80ecc9ec',
  b: '-0xc03788751c10d1aca99f6daa3959a5db90a475b5cb057a8fc',
  r: '-0xc037887651e84e5ba7baedf160da683e642a5f0ac314472e8'
}, {
  a: '0xa1db74b79e95669c1f8489620b9a874fb527671f59fb5c723',
  b: '0xef387e6eba42cd777bb0626b443cbe1e11f398f9b7b5409373',
  r: '0xf95635ba342c23e13da8ab0164f666930d460f6bad54f65a96'
}, {
  a: '-0x379e81a1e7d6d3478b53c8c54ad918a7e911e1e885d5db2f15ce287',
  b: '-0xe7edafabe2738aa56f12d9cf86d27452b4849909530ab79cc86bff6d8c90',
  r: '-0xe7edb325ca8da922dc475284c35ec900460f179a71293ffa261ef0ca6f17'
}, {
  a: '0x4ebe470b0c90e8f0cd717d15610e10b66db6b37a45b68b',
  b: '0xec72b1e4c3ff6aa31f33be8b5a19229d81eb4d2ddf3cbc0fb5b5fea46b3e275292',
  r: '0xec72b1e4c3ff6aa31f340d49a1242f2e6adc1a9f5c521d1dc66c6c5b1eb86d091d'
}, {
  a: '-0xefd163fb39fd400d28c87e57725b45a822e3dd4dac6efb645e8771f9842a1b9452',
  b: '-0x9133df8515bdce1a769d7b7311e13adf9cbbcf68859b10df9b9e19b8fc2520904b079',
  r: '-0x9142dc9b55716dee777007faf7586093f73dfda65a75d7cf51e402301bbd6332044cb'
}, {
  a: '0x7c5a04442ef8f4d79cbef8dd6b7031b444b52fc90b320856f6a540',
  b: '-0xd93e7afd5852b0c0c42ae03a34269c8abf8a70b05149aa78a5151c',
  r: '-0x5ce476b92959bbe9276be75cc8b66ad67ad540e74617a221ae6fdc'
}, {
  a: '0xd50e027d0018aa4565fedd1bc58955f3fd636ef7e0fba3b3ab99ddda094',
  b: '-0x4f24d1b19f56510f3d224c309fd6a4ab732cfb5b0dcd7db3f133',
  r: '0xd50e02780dcb8f2b7099cc27f36492e9fff92440ae2bee02cec2029af61'
}, {
  a: '0x25cb132388b135283de09e39b12c95f117e946ff2e066f20a',
  b: '0x528bada31bee78429eeb871b9242e8d57760fcad283a2943b2f7563',
  r: '0x528badc8e7019bcb5020af5972e12286a3f6edc511812871b96676d'
}, {
  a: '-0x73a3c0ddf42805729da4cb5d4b369fc57d8c945922da80f1491',
  b: '-0x8ed001864dbd79bad3649e68bbbba0429a5316c7ffbd0075525d2c8bb60ac501f3bcb1',
  r: '-0x8ed001864dbd79bad36bd8a4c99ae2c2f17cf114b591b3df4eb50554fb9cf2aa02d142'
}, {
  a: '0x87f0c74ba5ac10940ec480db6c564c2a8392b5a22d3e3be24e30563d82cdf12381b9e',
  b: '-0x56d81feb8748a6a4184ff42cfbfc47111f2e0af',
  r: '0x87f0c74ba5ac10940ec480db6c564bd3ab72ca1ae49797c9fe3c29418686e00453aef'
}, {
  a: '0x5ee347357a6a286d6d046eb77d4b707416bb587505dcbfc0944a9ebb8a155d992a4419',
  b: '0xd9ae340a10569320bf9d3dfa118e189a2c4d0',
  r: '0x5ee347357a6a286d6d046eb77d4b707424563bb5a6e228f2a044729b2b2e3f22cd08e9'
}, {
  a: '0x12468e4cca15ffb882c1e881a7ccd0f721f7763372e492a5e83',
  b: '0x318a0febf428edb8a6fe378317da861a4ceeb54f76da43',
  r: '0x124691656b14befb119d72f18b450274ca591b025e398a138c6'
}, {
  a: '0x6b96c1b4666f3e5f4b05486b9eecf6187af8f7c20dbb96e99be43a21a501d0dc',
  b: '0x38c8ad438fe6d5f0359414d8926f763740a0512',
  r: '0x6b96c1b4666f3e5f4b05486ba27980ecb3f765211114d837250b3185190bd5ee'
}, {
  a: '0xd75364acf2acb9eadbbe3d55715ce74b690a6e5f',
  b: '0x67c102149e44c9eb7f1490f7a2bd2c5931840cfcf51055d4a75289595',
  r: '0x67c102149e44c9eb8c89c74271e7f7f7df3ff0d24c2624495de3303f4'
}, {
  a: '-0xd947e55bb500783ce9c2fabfc1e87b6218a07885da4be756',
  b: '-0xef550bc0ef08c1f8fb983acdf2c52ebbcbd02b5047bc4b0d517c26',
  r: '-0xef550c9a36ee1dadfc1077b7b5bfee7db44b8d68e834d0e79d637c'
}, {
  a: '0xfeccf4aaa865fc9dcea40ac1121a925ed04f70fa785c5b93',
  b: '0x3e117c63afdb9325d12b95e61cf40c12a7c68d785e43',
  r: '0xfecd32bc24c9ac7961c9dbeca800af52dc6218c105d4b9d6'
}, {
  a: '-0x194ce7ecefe44be59ae7f42488383fa7988388e92ede83d39fc40ce9e',
  b: '-0xe7846ce4e1c8b1c56a0c71803b51261d3a22f4ee2d',
  r: '-0x194ce7ecefe44bf4132ec272a4c35bfe394aa0ece3f0e5a741f35bccb'
}, {
  a: '-0x2b8e9928a4b972c79c4ebfed9899f871bf72f4a12c5c3f86d4ac',
  b: '0x261917627a6b086584eb65e4d7f9d3c8f09d4478af414479e5408b25f4a12214c3',
  r: '0x261917627a6b0839f6523d401e870c2ca1dd56e01548d2ba724be9f998619b4017'
}, {
  a: '0xf97ea0660d10a97875b835d98bdb53a920c4b2114c70c42a8bfeadd9488a7',
  b: '0xf4cf960a351f5b8630a997eb965f0522ab7747287e04',
  r: '0xf97ea0660d10a97885052f3a2f2d496183cf4b9005d6b47cb6b6224bd06ab'
}, {
  a: '-0x9fee3511f3b4aa64321c09fc34db1f16533bb764c8ce2f152ef0a26f3bf',
  b: '0x1023eabc6a6b18321e0a8914c42ad313527fbe',
  r: '-0x9fee3511f3b4aa64321c08f9f62f586fa1b89584203ce2d281bf6d47401'
}, {
  a: '-0xea0a46e685498a8c4f76506166a2ba008c6648962480184a7621e08f4',
  b: '0xa5d45fffd4f2f17263e42df1a4a9318c3ac65fbecdede3469',
  r: '-0xea0a46e5df752a8c7a835eef02be8c0ee7bd1709e9b9b88ba833fd48b'
}, {
  a: '0x11d2cd8078462627313871353610dcf4ef6a17d52bbc5bca61991d8a3ca8',
  b: '-0xdf1f57d16af852b5c3fd1a151588132951078a04981c2d9219334f75cb',
  r: '0x10f3ae28a6db2dd47b74741b20fb54e1c619104b27243f9ccf7fea3ac6dd'
}, {
  a: '0x3494ac8358baf2be38d5a1b3d7fd483c629efe36f99d430bc5972',
  b: '-0x9d7f89317966f4bc1a40e411569c10b20aa0e66902deded8b5b6d1f14b37',
  r: '-0x9d7f892e301c2c868e91b82dc941f5748acc62a2d8eefb691be2a134f1c5'
}, {
  a: '0x9f406ebbf81e7205c678f4a3fc3176b571424c1630710b196557d29f5211111f097',
  b: '-0x28069942e5fb1a36774f0bd965f9423c5a12cbd2f',
  r: '0x9f406ebbf81e7205c678f4a3fc09701c2e5c50fbf9f9bc0d8bf1d95d15b6fe53368'
}, {
  a: '-0xd6c05c60e07ff1afae748b012167535306080d63c4284',
  b: '0x5b8f3c5a9c9484754041ee2e135fbab3923417ae002acd03daccda',
  r: '0x5b8f3c5a8f287eaf3239ef1318787203801da278cfca4c2d9e8a56'
}, {
  a: '0x910211635e6e6a9ae16de8ee4140c937bd0dd55c7768544700d01',
  b: '0x1ffa4bdb9f4ad23ed5ecb903ddc5c300cf799767a7df41c5',
  r: '0x91021363032c248f8e91d64d0cd10714193de25410decec4f4ec6'
}, {
  a: '-0x138778a3143408ffc9cc4448b4ac28259759b7ca600d159e8f6a327c',
  b: '0x65a45fd369050d2459159e1e93ce109adc2dcd0a5b6f25efd8f0fe86dab92',
  r: '0x65a45e9af17adbe11885a181cf89855019ab7394bff27fef0797159037916'
}, {
  a: '-0x74d297bb08b1417d0611885e6c6e2b6dac0',
  b: '-0x1c0ad8ec394002be73c20070c5787ba59f6152bebf380c34689d3e3633d1d326d8340',
  r: '-0x1c0ad8ec394002be73c20070c5787ba59fd625567a40bd75e5a34fbe923e415245e00'
}, {
  a: '-0x14d665b4be06d3cb6faa773e4f50e7f2e92c0',
  b: '-0xa429d6ba7d8b7cbd6097fa7076ce0eb23d60f0bcd',
  r: '-0xa429eb90e3403ac434636a1aee0c5e032553d9e8d'
}, {
  a: '-0xe56703e553af994a1e1e1cd94e0a5dd5b4412e',
  b: '0x40b585ee150f08d024c1ddb8e84f27d3e68d1666f95a18b7bfc549c5',
  r: '0x40b585ee150f08d023dc76b502fb783a9c6ef84a200c0e59ea110897'
}, {
  a: '0x6853cf004418937aa076177c1e43d8e5ed6ecea1417a119ff0db173',
  b: '-0x856cf97626119c2c8d1e10328a78861b7255475353',
  r: '0x6853cf0044188b23d0deb51b048110140c6ba5f9b9185a7a9c65e20'
}, {
  a: '-0x7b88ab7862bf048af1b9896f16b8edd2dd33809d9cfc72c3825034c48',
  b: '-0xc5eb02e0ea744155539d6d99c13ca24e4facdb346a3aaa8',
  r: '-0x7b88ab786384ef8dd2a3fdb06c0c8b4076f4bd3feb4c1f9eb6ba6f6f0'
}, {
  a: '-0xabf40e74acccf2ab0b613c5e52abf00beb5bcde3295ea62b353d7',
  b: '0x1b0cab70349983bfe59d9d411f353e3be2ea8d07d9e0f9c13ea536dda3b313e',
  r: '0x1b0cab7033ed8fb170f0d04e7429dcff8497e117cdf59df35b7bd837787dd67'
}, {
  a: '0x885bbe11fd3fda3d9e194977a61618390ea608c986dfd5dcf804db8',
  b: '0x2cc0909eeb3bb108a8b61d4d911611af35f9f6448bd20507ee',
  r: '0x885bc0de0649c8f15929d40307eaf14a6fc0fc2926441e9a18555a6'
}, {
  a: '-0xa58b6943205e5b504384c32d4701557384371388cc22b29',
  b: '-0xf2d214feb417a4cd76ab8d9a3dbb86c86fbc0a4c85',
  r: '-0xa58b787041ae4691bdd19a97ffdaf94f3ca39a848cc77ae'
}, {
  a: '0xbba8521fbe5e2078b91c6c2b2bfc36e25236ecf38c162ee8008ed6456e',
  b: '-0x93930005ff00a87592de0a16631a92f7288280adc40f12639f5c34a0',
  r: '0xbb14bf1fb85f1fd043898e2115991c4f5b0e6a72de521fd59cef7a10ce'
}, {
  a: '0x4cb57dc75c5572423717c059820b54795c9a8ca6d9512',
  b: '0x9b59452625f3540418e532e215c20274aba114592dbc5e',
  r: '0xa0249d029bb8ab283c56aee7ade2b7bc416abd239b5170'
}, {
  a: '-0xa7ee3725a850c7774ff3fa109770bbdca25b077243bed6e2b9d98acc0e99bf',
  b: '0xf574c2a034b1c2cfbd5a624369c00b2554b602d2',
  r: '-0xa7ee3725a850c7774ff3f91b22ae1ba7f09837b4e95c9378f9ce65775896ed'
}, {
  a: '-0x361b7bb9143867b83c9e5a3881b0854dfb61bf1eb2a88d9fa2d72',
  b: '0x7a92e8a368933e9e83f6c4786c54b19e5fcd11e5e46d90a',
  r: '-0x361b7b3e814fc44fa95fbbb48aec0ce1a6b020bee596a7bb35468'
}, {
  a: '0xdc7f387415b5fe1da16e050ac89e9dd983b90e4e61428c176',
  b: '-0x1ba41d0ddc833862eb811490d3b50f31eeee29bef93c25baca1af4fbce',
  r: '-0x1ba41d0dcebb44dbaa25b4aef99e2ee142643fe1610094d5e406cc3a58'
}, {
  a: '0x4e17d9a073e072227f24a1b2eae32b3c5afc303408cf795333a6e14a1381f0800235',
  b: '-0x163243f6fae7c579aca43efd4aeebee5e6bb8a006e568c45195a668b755992c5d8dd',
  r: '0x37e595a978f8aca8d28062b59ff46c567440a6339a78ed0e1a4c7abe9e285dba2958'
}, {
  a: '0x906009e21f2404f88dca3d75150aeb7e77e9b50db4cb0d97cf6f3aaf0d9',
  b: '0x27c3d9cf4092fabb384d2847f58bed513b26672e215cc1f0d334dc555e88a',
  r: '0x285439d922b21ec030daf2856aa0f83cb99e50e32f118cfe6b044b900d963'
}, {
  a: '-0xf72aae64d54951cae560d9b4531ce6cf02426f8cd601b77',
  b: '-0xf3cf5edd759dbcc7449962cdb52ae0295be7306d51555c70',
  r: '-0x1034209c3c2f251e3f2ef7068fa5cae964c0b57661eb577e7'
}, {
  a: '0x62bab57f042a7b8c08eef0729b0b5ef64f7ab199b',
  b: '-0x92ad7640b1938514ca5668dae1056d1495e79f0',
  r: '0x62280808c378e806f4249a09c02a59893ae4c9fab'
}, {
  a: '-0x3378b4288e07e25cabb7e0c89df0fa8f35d5ec',
  b: '-0xfd27f7ac9e923d3b668954697da0ddc49ca9b90',
  r: '-0x1005f82ef2772bb613144d276077fed6d900717c'
}, {
  a: '-0xa1d7ec691619216886489b21eb4435958eaa587dfee45b35',
  b: '0x53c6167b0cb580e92c7d9a597a4df4eba30f3a7a12905286a29945c',
  r: '0x53c61670ef36ba57caeb83d115c442cceecbe12127eacaa6b453927'
}, {
  a: '-0xcc7e390c627eb3f96a54b36ef83429fffc05a9377ab504085c9c8a62a3673e',
  b: '-0x986f164ec9f72cb54f723a02d4f32560f1f2aaf9d2b07aae701c82280b0e',
  r: '-0xcd16a822b148ab261fa425a8fb091d255cf79be27487b4830b0ca6e4cb724c'
}, {
  a: '-0x2aaeaa154d1bece66dd2915d26b018aa39f34d220e97e723560aafd986',
  b: '0xee484d8a845171e48ce1a074536bfffa15f6d',
  r: '-0x2aaeaa154d1bece66dd28278a1d7706522d50453f490a1ec960b0e7a19'
}, {
  a: '-0x4994a97ad9fa3be335bc64fac48da24a7ebdaa19de659c5b27b3af69',
  b: '-0x9f31482c1d19ab6cbd1990ad2cbad85dd3cf',
  r: '-0x4994a97ad9fa3be335bd042c0cb9bf642a2a67336f12c91600118338'
}, {
  a: '-0xbf3755ed478c4421ec66df3e9811b1c35e9264f93024e7793b3c07a0e597aabc87',
  b: '-0x23b05949261f28fda819be889c8affd0af4f3cf463fd',
  r: '-0xbf3755ed478c4421ec66df62486afae97dbb62a149e37015c63bd85034d49f2084'
}, {
  a: '0xcde60a02dbbf363fb004c2dfcf7fb2c7ae0491d7002aa1f2',
  b: '-0xbdb2c44be2bcd7351056753366849b2372f353b2f93a',
  r: '0xcde54c5017735382d8cfb2895a4c4c4312e11ee3ac77a8b8'
}, {
  a: '0xd71d5018f8d7cca1e9b46402fd7dfa573cfff20366db2e603110081cfe',
  b: '-0xf1c5357d040b3b4e478101382cf33a3bdb931038d230f0233e356da764b3',
  r: '-0xf0ee182ceb126381a5974cd429f5bc4184561046ceca14f4de045d9f47b5'
}, {
  a: '0x58cb393e72033ed1bf590873428a38e4541b59c7629c2bc079274caae23c164',
  b: '-0x472627d6ab55106abdf7996a164526833dc2f',
  r: '0x58cb393e72033ed1bf590873424312bc7d7004b6f7de34270f1107845efe535'
}, {
  a: '-0x125786bf0e51c7068a49c27f83a33057b8ba6560a8f45',
  b: '0xa6ee4b2de5cb0fdb696e7eb424bc24d4b5fc882f7fd3741ccfc7f6c667',
  r: '0xa6ee4b2de5cb0eb5f1028dcf084bbc3019d48ff54ccdf8912971ec3722'
}, {
  a: '-0xdb8eba195b806726347c627629e3fab5b3c221a44dcd883a4',
  b: '0x23d417dccc0cecece3f99d33b33680c71053a8b737ab5258f98d993eb1f',
  r: '0x23d417dccb315e32ca9e1ccc8d0204649a29c4bc81f79037553fcbb677b'
}, {
  a: '0xeb326f713fc65d5e757e934e2c0cea4f220fbd05ae5b71c95d6',
  b: '0x390aceef913ea4aa2c071b65ab9b865995a5a654067a649758130fda1e4a39cec17',
  r: '0x390aceef913ea4ab17398ad6eb61e3b80b2439a232874ee67a22ccdfcca5ab981ed'
}, {
  a: '0x147ff9bec1e5653438af617a0f03d52f19485dcead990b7e0d0eed01df712521f3eb24',
  b: '0x379f4f9b2993009ad3f1d6d4af5f0361699fce48fd000e8cb1',
  r: '0x147ff9bec1e5653438af99195e9efec219e331c0846dbadd107056a1adba22220277d5'
}, {
  a: '0x492cc0238ff249bf50dcf63d8ce57c02a07e9492305b05596',
  b: '-0xd927ba2d7b9c82c86498a511f454dcf05bee55',
  r: '0x492cc0238fe4b743ae053c75605f32784f5f4f44615546741'
}, {
  a: '-0x3fba64286c71190971b9af81ad731fbbb1a85',
  b: '0x91eec964bf4bc07f7a2078e7955f857f0d9a8357791154241c42eff5',
  r: '0x91eec964bf4bc07f7a1c7d4152d8be6d7d0367bc80f67cf22087d570'
}, {
  a: '-0x6bd17e6767a98642937b83f182d03536ae733680da91732dc7f',
  b: '0x459dfb5648be28b1d8fd8734b8ab61c907a0c18572aee1d8a4fb33ecc9',
  r: '0x459dfb4f8ba6423b5e65230b80f322b0da9d6e1a8b7b79cafbe401104a'
}, {
  a: '-0xa1a089d123a21a67fcb010cf753bb0069531c9b259caa1d5dc6322bfe69ef21724d',
  b: '-0x83a1b87e29e5d092d8a17aed3253aceff0d28040d3c5dda',
  r: '-0xa1a089d123a21a67fcb094712db9d9ec65c4a253d4b7d4298953139266dfc5dd027'
}, {
  a: '0x979f7f06bddef0b58767b70c7eb9aaa11d03',
  b: '0xd1b43ac3ffebc61aa8c21e1652cba6550af020d95ec3',
  r: '0xd1b43ac4978b452166a10ecbda335d6189a9cb7a7bc6'
}, {
  a: '-0x36c3c4568290d03d19a833b5c83a8e7ff9eb01a08f6e',
  b: '0x5ad0807fdec05336bef1a48508a0ccb2fde53',
  r: '-0x36c3c450d588c83f2da30049d920462f6fde3670b11b'
}, {
  a: '-0xeb961c29be8f9349869cae8ed8ebd58ca84935fd754d86476a6cdf',
  b: '0x708722650770ccaf63440138dcea22ad24c40b12e9a81689c7711154057aef14fa7a4c',
  r: '0x708722650770ccae77ade50f1e5a8f639e275c8410bc40fd1f27db56902d68cd900d6d'
}, {
  a: '-0xc522bbe0d25fd53ee02358aad6ca6021c7203dc3795950c0a57acf',
  b: '-0x2ee54b3087623ab2b9bc2462e2d6aa90c96ec02772ce8856048c46430d89cc7947b1e',
  r: '-0x2ee54b3087623abf0be7e27008d3fe7ecba44ad4df748a727690227aa31ed8839f5ed'
}, {
  a: '-0x7e6d8f30c4d21481223e0098aeeed3e16935a15',
  b: '0xe983ea144fcb96bc5b65b46e77b4378e89a0bc3ca811210eb4725',
  r: '0xe983ea144fcb963dedd683a9a59fb66c4ba0238db93d3fa57ed10'
}, {
  a: '0x797990f505cccf96aedd226c0fa04edd0a326cdb862a9e864f1',
  b: '0xbccbe9e5f97790f47aff7efe86c975b6233e3f58fad9ec3c98fd5a1d457c',
  r: '0xbccbe9e6010f2a03cb5c4bf7f1b747dce4384446cb7d130a51600405aa6d'
}, {
  a: '-0xa9c26050e756e9ffb078848cf60a9318ae5ca79efbd',
  b: '0x63f8fc32bcdd198aab4faf14911bfc52516d83a1f74e7016e',
  r: '0x63f8fb88fa7cc8a35465af6418976f5c46da6af39aa6d11b1'
}, {
  a: '0x9843bdb31f0a479fee78485aff2f486283a75b19f51675f82d6',
  b: '0x5b1d3015215acd66934dcd5e7a981074d77',
  r: '0x9843bdb31f0a47a049957870208a15c916f528786fae866d04d'
}, {
  a: '0xf6f3cc940997455fa4249ef558b85a9e129ea13b3aacec8aef12628b32',
  b: '0xfb70fea3c3038ab94c83ae9728767a67fafe3626ab3534c3d90d6ad',
  r: '0xf70383a3f3d375984fb96730422ae205b91e511e9d179fde3b4ff361df'
}, {
  a: '-0x53206f13656887d00dee09cb997eb1dd40c23cdd656357d2a239dd65cb',
  b: '-0xa24342fca1452544a368d85fa68731f611fe33389',
  r: '-0x53206f13656887d018123dfb639304318af8ca635fcbcaf20359c09954'
}, {
  a: '-0x85e9ae58a272f6fb43d5a19dec02a2aded43f3313c874877a3acf440',
  b: '0x9767d7f65ee1a1bdba9d9bb1290affffbc7c56ffa2d4cc2589df45c73f9c09a6ce7113',
  r: '0x9767d7f65ee1a137d0ef430eb61404bbe6dab913a0321e3845ec148ab8539203217cd3'
}, {
  a: '0xc5c96526a7170e10addcf54be24ac948263b91e162d055a',
  b: '0xd6655526ae866ed02f590af6376739bc3cb1c02af3a64e5a350e934d848c2ab55',
  r: '0xd6655526ae866ed0301ed45b5e0e50ca4d5f9d203f8899237d34cedf65eefb0af'
}, {
  a: '-0xe181197823294445368ba5cc816444eb1612e69d1ad70e75a147677961',
  b: '0xdca2178f6e7ef5c5ec908462e9c9f7cfc7e74711a0a9d31a77ec8e485',
  r: '-0xd3b6f7ff2c4154e8d7c29d8652c7a56e1994722c00cc7143f9c89e94dc'
}, {
  a: '-0x1d5b96c2c0d2a0c8a1579a325f79b17b3a4a583aeb05b4cf78618690a02d3',
  b: '-0x4baacb3b6c173739ce8bfa9b1e7878514641fe489fe2fbad3d5f73843',
  r: '-0x1d5be26d8c0e0cdfd89168be5a14cff3b29b9e7ce94e54b2740ec3f013b16'
}, {
  a: '-0x880e3c79b4920b46b3901e6da31bf1481e74e878195427d8524ea53b747',
  b: '0x257d3a16b51318df19f5426ed171e8a689d93cf0e4424703d12248b',
  r: '-0x880e16fc7a7b56339ab1047860ad1fd635ce5e9edc6343960b4ad4192bc'
}];

const dataSmall = [{
  a: '0x0',
  b: '0x91e54eaabf',
  r: '0x91e54eaabf'
}, {
  a: '-0x2c2e',
  b: '0x8b92',
  r: '0x5f64'
}, {
  a: '0x321c380918d',
  b: '-0x65c1dc1a678f913f',
  r: '-0x65c1d8f8a40effb2'
}, {
  a: '-0x2939',
  b: '0xd6',
  r: '-0x2863'
}, {
  a: '-0x30a16ea60',
  b: '0xcc956e8',
  r: '-0x2fd4d9378'
}, {
  a: '-0xf0d4cb82',
  b: '0x6ace',
  r: '-0xf0d460b4'
}, {
  a: '-0xf8d97d8f',
  b: '-0x6a030',
  r: '-0xf8e01dbf'
}, {
  a: '0x1985c7d',
  b: '0xabf0',
  r: '0x199086d'
}, {
  a: '0x2c4e1c7c6ea78d',
  b: '0xe4d68af8a',
  r: '0x2c4e2ac9d75717'
}, {
  a: '0x509',
  b: '-0x88886',
  r: '-0x8837d'
}, {
  a: '0x54c2834bef0b3f8',
  b: '0xc52f6e',
  r: '0x54c2834bfb5e366'
}, {
  a: '-0x976e7d3e05',
  b: '0x78e78d1',
  r: '-0x9766eec534'
}, {
  a: '0x64fdce57c6',
  b: '0xf0558642',
  r: '0x65ee23de08'
}, {
  a: '0x951',
  b: '-0x9982e4',
  r: '-0x997993'
}, {
  a: '-0x4b805e1',
  b: '0x774923b363289c4d',
  r: '0x774923b35e70966c'
}, {
  a: '-0x78127ea1',
  b: '-0xb591d5480c',
  r: '-0xb609e7c6ad'
}, {
  a: '0x501e2e1ad094f',
  b: '-0x881',
  r: '0x501e2e1ad00ce'
}, {
  a: '-0x2a8a',
  b: '-0xd450f87a26',
  r: '-0xd450f8a4b0'
}, {
  a: '0x913a',
  b: '-0x465fee441a921e57',
  r: '-0x465fee441a918d1d'
}, {
  a: '-0x3f3d47',
  b: '0xaa8',
  r: '-0x3f329f'
}, {
  a: '-0xabc3b33',
  b: '0x2530c727064cd4ba',
  r: '0x2530c726fb909987'
}, {
  a: '-0x22c450bf5',
  b: '-0x36',
  r: '-0x22c450c2b'
}, {
  a: '0x55920bdad32524',
  b: '-0x42d27f2f6993205',
  r: '-0x3d795e71bc60ce1'
}, {
  a: '0xe5049b',
  b: '-0xc',
  r: '0xe5048f'
}, {
  a: '0x614086e43ca4c',
  b: '-0x92a908c0daa7bf4b',
  r: '-0x92a2f4b86c63f4ff'
}, {
  a: '-0xe08794f',
  b: '-0x7a2c48d',
  r: '-0x15ab3ddc'
}, {
  a: '-0x5bb',
  b: '-0xb3743344f7cdf5',
  r: '-0xb3743344f7d3b0'
}, {
  a: '0x0',
  b: '0x8f',
  r: '0x8f'
}, {
  a: '-0xa3cb5d958f3',
  b: '0xdcd0e8dbdec848',
  r: '0xdcc6ac26056f55'
}, {
  a: '0x2bdc50df6d0',
  b: '-0xf0d26087a33104',
  r: '-0xf0cfa2c2953a34'
}, {
  a: '-0x5f093fc19def698',
  b: '-0x7f989cdfd8247de',
  r: '-0xdea1dca17613e76'
}, {
  a: '0xd3a',
  b: '-0xff5ae97566',
  r: '-0xff5ae9682c'
}, {
  a: '0x132caae97',
  b: '0xc2ba858a54b32e7',
  r: '0xc2ba859d815e17e'
}, {
  a: '-0xf461217b3d2',
  b: '-0x6c5',
  r: '-0xf461217ba97'
}, {
  a: '0x2dcb16',
  b: '-0xe5',
  r: '0x2dca31'
}, {
  a: '0x5061ecdaf102',
  b: '-0x75',
  r: '0x5061ecdaf08d'
}, {
  a: '-0x1',
  b: '-0xc7d',
  r: '-0xc7e'
}, {
  a: '-0x81',
  b: '0x0',
  r: '-0x81'
}, {
  a: '0x33b5',
  b: '0xd6a6ad4d06bfdbf',
  r: '0xd6a6ad4d06c3174'
}, {
  a: '-0x7adc79',
  b: '-0x59ed5586cb42ef89',
  r: '-0x59ed5586cbbdcc02'
}, {
  a: '0x73',
  b: '0x0',
  r: '0x73'
}, {
  a: '0x0',
  b: '0x0',
  r: '0x0'
}, {
  a: '0x74d',
  b: '0x1af10e7f4a76cc',
  r: '0x1af10e7f4a7e19'
}, {
  a: '0x55f0694a2b9b6e79',
  b: '-0x276e9ec0',
  r: '0x55f0694a042ccfb9'
}, {
  a: '0x6f',
  b: '-0xca0b99634fb',
  r: '-0xca0b996348c'
}, {
  a: '0x3b148699d5d807',
  b: '0xea2061bc47c927',
  r: '0x12534e8561da12e'
}, {
  a: '0x61ce',
  b: '0x531e',
  r: '0xb4ec'
}, {
  a: '0xb76a9',
  b: '0x504f366f77f1',
  r: '0x504f367aee9a'
}, {
  a: '0x58c',
  b: '-0x9b12eeecdd20',
  r: '-0x9b12eeecd794'
}, {
  a: '0x7dc5cbf',
  b: '0xe3defca1c',
  r: '0xe45cc26db'
}, {
  a: '-0x43463c',
  b: '0x115819d',
  r: '0xd23b61'
}, {
  a: '-0xcbc0',
  b: '-0xd1fc74d6049b',
  r: '-0xd1fc74d6d05b'
}, {
  a: '0x1563bd',
  b: '0xd9',
  r: '0x156496'
}, {
  a: '-0xe9d219',
  b: '0x695e6c',
  r: '-0x8073ad'
}, {
  a: '-0xce3cedd9f05ffee9',
  b: '-0x7b8013',
  r: '-0xce3cedd9f0db7efc'
}, {
  a: '-0x2a',
  b: '0x0',
  r: '-0x2a'
}, {
  a: '0x8095fb644d',
  b: '0x28',
  r: '0x8095fb6475'
}, {
  a: '0xc434c030',
  b: '0xfada3b6db33',
  r: '0xfae67eb9b63'
}, {
  a: '0x797db43d76ef97',
  b: '-0xd6d',
  r: '0x797db43d76e22a'
}, {
  a: '-0xd',
  b: '-0x51373316',
  r: '-0x51373323'
}, {
  a: '0x5ec5b',
  b: '0x0',
  r: '0x5ec5b'
}, {
  a: '0x0',
  b: '-0xb1b47',
  r: '-0xb1b47'
}, {
  a: '0x6956af2',
  b: '-0xcc9fa',
  r: '0x688a0f8'
}, {
  a: '0xb769b6eee3',
  b: '-0x2ec1529032d7302',
  r: '-0x2ec14719976841f'
}, {
  a: '-0x39088',
  b: '0xceac9a2018c9e',
  r: '0xceac9a1fdfc16'
}, {
  a: '-0x37005507a',
  b: '-0x4be9a63a2',
  r: '-0x82e9fb41c'
}, {
  a: '-0x3',
  b: '-0xa66b5a57e',
  r: '-0xa66b5a581'
}, {
  a: '0xc77',
  b: '0xbcd171370dc2a5',
  r: '0xbcd171370dcf1c'
}, {
  a: '-0x95d28c1',
  b: '0xa8d7783b721df27',
  r: '0xa8d7783adc4b666'
}, {
  a: '0x4a955a7',
  b: '0x3',
  r: '0x4a955aa'
}, {
  a: '-0xbcf23a',
  b: '-0xe0c4a',
  r: '-0xcafe84'
}, {
  a: '-0xb',
  b: '0x2c81497',
  r: '0x2c8148c'
}, {
  a: '0xa',
  b: '-0xf6e63ba29',
  r: '-0xf6e63ba1f'
}, {
  a: '0x664267',
  b: '-0x9',
  r: '0x66425e'
}, {
  a: '0xb18c4ba9e33',
  b: '-0xeeb5e68ce9c7',
  r: '-0xe39d21d24b94'
}, {
  a: '0x266706214c8a6d2a',
  b: '-0x6a767216785dab0a',
  r: '-0x440f6bf52bd33de0'
}, {
  a: '0xbc20c8241f7c3',
  b: '0x0',
  r: '0xbc20c8241f7c3'
}, {
  a: '-0xfe503f348db',
  b: '-0x57124c27e6',
  r: '-0x103c163f70c1'
}, {
  a: '0x8ca0',
  b: '0x2451dcbe8ef',
  r: '0x2451dcc758f'
}, {
  a: '-0x265ca',
  b: '-0xd1750316f93a56d1',
  r: '-0xd1750316f93cbc9b'
}, {
  a: '-0x969e8e561ac',
  b: '-0x8c43fc7b3',
  r: '-0x972ad25295f'
}, {
  a: '0x8e6983632c867516',
  b: '-0xc5476ad',
  r: '0x8e6983632031fe69'
}, {
  a: '-0x32acddea8ed',
  b: '0x21e712',
  r: '-0x32acdbcc1db'
}, {
  a: '0x640ffe0688',
  b: '-0x448c422',
  r: '0x640bb54266'
}, {
  a: '-0xc',
  b: '0x0',
  r: '-0xc'
}, {
  a: '-0xa12b',
  b: '-0x9c8bce21ce4',
  r: '-0x9c8bce2be0f'
}, {
  a: '0x68d',
  b: '-0xc3eca',
  r: '-0xc383d'
}, {
  a: '0x85321e',
  b: '-0x200cefd195fb',
  r: '-0x200cef4c63dd'
}, {
  a: '-0x1303ffc',
  b: '-0xbe9028237cba2d0',
  r: '-0xbe9028238fbe2cc'
}, {
  a: '0xd96685c6723d01e',
  b: '0x0',
  r: '0xd96685c6723d01e'
}, {
  a: '-0x1bbe26',
  b: '-0x502d',
  r: '-0x1c0e53'
}, {
  a: '0xb0dfe3',
  b: '-0x704c0b201',
  r: '-0x7040fd21e'
}, {
  a: '0xcb1e1',
  b: '-0x7a5eb',
  r: '0x50bf6'
}, {
  a: '0x5bf',
  b: '-0xee70e145315d6c',
  r: '-0xee70e1453157ad'
}, {
  a: '0xc3d668',
  b: '-0x5ac13f0d77',
  r: '-0x5ac07b370f'
}, {
  a: '0x9ca0823d0fb',
  b: '0xf4dd',
  r: '0x9ca0824c5d8'
}, {
  a: '0x13ff81b6149d518c',
  b: '0xa6381f8c97f66e',
  r: '0x14a5b9d5a13547fa'
}, {
  a: '0xd876642a0ff1c',
  b: '0x0',
  r: '0xd876642a0ff1c'
}, {
  a: '-0x2e5cd3c20f2',
  b: '0x5fdfceac3227eac',
  r: '0x5fdfa04f5e65dba'
}, {
  a: '0x93130bdbbac18094',
  b: '-0xb2079ba09cad8e5f',
  r: '-0x1ef48fc4e1ec0dcb'
}];

import JSBI from '../jsbi.mjs';
const JSBigInt = JSBI.BigInt;

let errorCount = 0;

const dataBigNative = [];
const dataBigJsb = [];
const dataSmallNative = [];
const dataSmallJsb = [];

function hexParseN(s) {
  if (s.charCodeAt(0) === 0x2D) return -BigInt(s.slice(1));
  return BigInt(s);
}
function parseNative(d) {
  if (d.b) {
    return {a: hexParseN(d.a), b: hexParseN(d.b), r: hexParseN(d.r)};
  }
  return {a: hexParseN(d.a), r: hexParseN(d.r)};
}
function hexParse(s) {
  if (s.charCodeAt(0) === 0x2D) {
    const result = JSBigInt(s.slice(1));
    result.sign = true;
    return result;
  }
  return JSBigInt(s);
}
function parseJSB(d) {
  if (d.b) {
    return {a: hexParse(d.a), b: hexParse(d.b), r: hexParse(d.r)};
  }
  return {a: hexParse(d.a), r: hexParse(d.r)};
}
function prepareData(src, dstNative, dstJsb) {
  for (let i = 0; i < src.length; i++) {
    const d = src[i];
    dstNative.push(parseNative(d));
    dstJsb.push(parseJSB(d));
  }
}
prepareData(dataBig, dataBigNative, dataBigJsb);
prepareData(dataSmall, dataSmallNative, dataSmallJsb);


function testNative(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = d.a + d.b;
    if (d.r !== r) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: +');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a + d.b;
    }
  }
  return Date.now() - t1;
}


function testJsb(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = d.a.add(d.b);
    if (!r.equal(d.r)) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: add');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a.add(d.b);
    }
  }
  return Date.now() - t1;
}


const kRepsBig = 40000;
const kRepsSmall = 120000;

console.log('Native/big:   ' + testNative(dataBigNative, kRepsBig));
console.log('JSB/big:      ' + testJsb(dataBigJsb, kRepsBig));
console.log('Native/small: ' + testNative(dataSmallNative, kRepsSmall));
console.log('JSB/small:    ' + testJsb(dataSmallJsb, kRepsSmall));

if (errorCount !== 0) {
  console.error('Finished with ' + errorCount + ' errors.');
  // Support both d8 (`quit`) and Node.js (`process.exit`).
  (typeof quit !== 'undefined' ? quit : process.exit)(1);
}
