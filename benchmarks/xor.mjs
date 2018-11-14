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
  a: '-0x5864a1543ba1ddf0b3043abc9f7a0c78b7b68ba6b19e9877694a6ece6fb8083bc47',
  b: '0x84c4d3dfcf3e7f7fdaf12c36a0305f2b9798099e634f2c24364a157490b680f58d8',
  r: '-0xdca0728bf49fa28f69f5168a3f4a5353202e8238d2d1b4535f007bbaff0e88ce49f'
}, {
  a: '0xc74cd0148d0bf51dd8636c603bc3794cbeee9b4a6701306bb652238bb',
  b: '-0xcbc0dc5228092eb226b5d4a4d48381d37ce475379caf3a557f24e581dc25b71',
  r: '-0xcbc0dc9564d93a3f2d40c97cb7efe1e8bf9d3989723470327e148e378e063cc'
}, {
  a: '-0x5a07d920d76650a8f86fd86ba2cd97b40ad05f539ed1abadd',
  b: '-0xd9296dfeeb4d1d0684e339f61db30b6fe6d08ea',
  r: '0x5a07d920d7bf79c506849576a449748dfccdec58f1377b235'
}, {
  a: '0xd16d95b9938d84c6a28c2b431a1f0b0223909c8948b6',
  b: '-0x106cdc1c2cc8e771f5f496d8a4885e967cf21f95dacb',
  r: '-0xc10149a5bf4563b75778bd9bbe9755945f62831c927d'
}, {
  a: '0x26a9aed4b013c9b08828a9cbf197d11e5b6133',
  b: '-0x3e7ba99b090bc59f4a7b2edc382842ae2d3ecc5e97a49cacb27091410cd',
  r: '-0x3e7ba99b090bc59f4a7b2cb6a2c509af11a5c4dc1d3823b5cf6174f7200'
}, {
  a: '-0xb89fc3680fc8141e36dff405ed2497f9b514a8988f78b',
  b: '-0xb35f62031f1c8259f088c85ec5cde7cadaf43823e9e3f9e9754f2',
  r: '0xb35f6203a7834131ff40dc40f31213cf37d0afda5cf75171fa37b'
}, {
  a: '-0x6b97f92a79efe0bb987e8f9ab426c1b62e651d36d04ba6294516f1ea',
  b: '-0xaf6630198e80d5a7a13d14aa2de995a7c81fd9a1da92c2fb527c10e79cec748b056500',
  r: '0xaf6630198e80d5cc36c43ed3c2092e3fb6904315fc5374d537612637d74a5dce139516'
}, {
  a: '-0xf0add154381078ad75add989f127b460f05d',
  b: '-0xb8118c78ab52166e2fd83be985e3e2bfbabf9419218d05dfa8bc39b6547ab978b6',
  r: '0xb8118c78ab52166e2fd83be985e3e24f176ec02131f5a8aa0565b04773ced988e9'
}, {
  a: '-0x2b6e9c2ac10ce2299365d15105b174fdb131c477f363778e',
  b: '0x700991655480f1f9436c56d5f61c77527b5f058bec9bcbbdb9',
  r: '-0x7022fff97e41fd1b6aff3304a719c62686ee344f9b68a8ca35'
}, {
  a: '-0xeeefcf52550079566010087fd439e6def0e0983',
  b: '-0xa831005a61419c51a6bf4015ff51ad49754df70f94a6e',
  r: '0xa83100b48e8ece04a6c61675ef59d29d4cab29ff743ef'
}, {
  a: '0xe7ec017268115c9eb3370a86941eed1ed4421676ab3fa43ad482de2bdfcacad557cb3d',
  b: '-0x203194e8135112901f4f851a9bd94fd57d49262bf4f081893e9c4e8e162d',
  r: '-0xe7ec017268316d0a5b245b940401a29bced9cf397e42ed1cff762eaa56f4569bd9dd12'
}, {
  a: '0x65baf7c3b564185a28154e4ac8dc8490c086f1a4effa8a9edb6e2675f',
  b: '-0x6f68026660d3ca7da8eff04bd9d611f4caa64ddd4a86c8fd040ca9e40da3f45b5',
  r: '-0x6f68026605693dbe1d8be811f1c35fbe027ac94d8a003959ebf6237ad6cdd22ec'
}, {
  a: '0x2b6d19b9196cab34ef109506c1802b041e34b9f37f6',
  b: '-0xf63e3b37ab415635e8b0b24db6c552369df44b3c',
  r: '-0x2b627a5aaa161f218c4e1e0de55b47513d5d66b7cce'
}, {
  a: '0xefe8354d088d0611c61db4c51f30b7f7b7b',
  b: '0x66dafb50c31952f9c9b1b66c08cf68f7c8247c62aba45ca8ef4a5f',
  r: '0x66dafb50c31952f9c9bf48ef5c1fe027a9381db9e7f5afa3903124'
}, {
  a: '-0xd0c335ee055f498d93b535ce72a5f9dcbb8c2cf5c42c53e',
  b: '-0xb44dfaa5ec6117dd284163e95968903d71a0ddd98e52',
  r: '0xd0c87131af018f9cee67b1d84c306f55b85b36f819b4b6c'
}, {
  a: '0xd5d6d2a8716e1232c6a3c92f9049b181497cfa8e640063ad1d',
  b: '0xb6adca221b2844766b43d83707f90500b43b23e3fb4e9c972d6607',
  r: '0xb6ad1ff4c980351879711e94ced6954905ba6a9f01c0f8974ecb1a'
}, {
  a: '0x93aef692dc76207ff5fd7cd2ebb0b9e07cd028c62856928e',
  b: '-0xfc1e68558eba94ac2b44516791c30660d8f8b74ee1c8922ff4b24b82ab53',
  r: '-0xfc1e68558eba0702ddd68d11b1bcf39da42a5cfe5828eeffdc7463d439dd'
}, {
  a: '-0xea1ea6ff548e226dacda0a091afeac39fa36eef63af',
  b: '0xb0b7c7f4480da394c266bfd4f85e4e43e7122d575a1d66a3a3b781',
  r: '-0xb0b7c7f44803027ead93f736de8483e3478382bd9982c5cd4cd430'
}, {
  a: '0x61f413f1fe0758148268c459c071bf5301c826a651cf45de',
  b: '0xa99d0e7cd6ceb37b521c80cd9ee3516bf61f25d4c24926b8b104cfa592c03ff136d22',
  r: '0xa99d0e7cd6ceb37b521c86d2dfdc4e8b839e6df24e0cbabfaaf1ffb910aa5aedc28fc'
}, {
  a: '-0xa5f3fb6c1bdbc59e98ae662eb41ba4bda7004124087068b6f331444027ec',
  b: '0xb6601b3b100831c2f613691d981cbfd2d2eeff15d01ee92b7b086c61eed53db',
  r: '-0xb66a4404a6c98c7eaffae3fbfaf7fe6899348f11c25e6e2df0675f75aad7431'
}, {
  a: '-0xf8c5878e8c692afb49a872ebdaa2f4be7094c0f52fdf03cf2df740c955d59f8046',
  b: '0x16e531d552a3730999eab6eaf5bacaa151f33d052ac0a86eb69899626f',
  r: '-0xf8c5878e9a8c1b2e1b0b01e243484254852e0a547e2c3eca0737e8a7e34d06e22b'
}, {
  a: '-0xc678588ef1cdbd14a4292c033c5b91b40d7f2649c06126e4b98553eb4b5b0e0fc1890',
  b: '0x6c810da5e1e1a6146b34975a27812668a535f',
  r: '-0xc678588ef1cdbd14a4292c033c5b91b461fe2bec218080f0d2b1c4b16cda286764bd1'
}, {
  a: '-0x3292ca6357fddd8cbd51e535053d85dbf38abb2f3e1c',
  b: '0xd903f0e86b395c31e6524978a276e2a1c86',
  r: '-0x3292ca635a6de2823be270f61b58a14c79add505229e'
}, {
  a: '0x62673690f7c5a0b55674cb2c8801a5381f952de424697441119c5f5ae599cbbba9297a',
  b: '0x36a46db0be100b71744df78642d6b5f6426250e0a3a4e8b83b8fb',
  r: '0x62673690f7c5a0b5551e8df783e0a58f08d1f29c40441f1e75ba7a54efa385302a9181'
}, {
  a: '-0x1d44af49ecc5b30b156c5afc54f58e3f33d32fab0a9635546f4',
  b: '-0x681d0bced8a9bd59294c5f22e13a47406ddf705f2d565bb',
  r: '0x1d44c754e70b6ba2a83573b00bd76f05749342747ac91802349'
}, {
  a: '0xbcdad086fe7d09df330bc0e0e0e4058039247a3ce0151bdfdb',
  b: '-0xbd0507af7324792c465829803e22cbb43fe42fd439576b67',
  r: '-0xbc67d581510e2da61f4d98c960da274b8d1b9e13342c4cb4be'
}, {
  a: '-0x9af08dda6c384e89a5f8704117ca9ac61a7aa5f7c04',
  b: '-0x5abe6e45f031fd660019c357debb4c56f1da58ebf4581f9378ea8651',
  r: '0x5abe6e45f031f4c908c465945a53d60976de49975df47e34d2b5fa53'
}, {
  a: '-0x60f9ea440c143b8a0e99906e471ecea6a9466306a9caea0',
  b: '-0xb348f82662a3438b12a2fc563eb2b38d9359b41d1aca9fabc07f3ac142b957f9a',
  r: '0xb348f82662a3438b12c205bc7abea7b619572d8d748d816566d67ca244109d106'
}, {
  a: '-0xb5071b1d1064d258fb48502d99b44d573b79',
  b: '-0xed3c8e38bafdd4f805ce1529c9a58b606a8f6567f06a705465c815d5',
  r: '0xed3c8e38bafdd4f805cea02ed2b89b04b8d79e2fa047e9e0289f2eac'
}, {
  a: '-0x7f56503c1353f21f53c8685a99734e913d9495027217271ac7585320b5d1785',
  b: '0x406c5b0ac7f29483f770fdbcd844e08d582d4e41',
  r: '-0x7f56503c1353f21f53c8685e9fb6fe3d42bddd3d0518fcd743165bf537059c6'
}, {
  a: '-0x7f9e0c5f75e5d1411b060a0f75ae1d3c6486633096508fea8910',
  b: '-0x32cfd0e19d4ccbcec29d0fc43bd335a9a927e8230637062a7c29',
  r: '0x4d51dcbee8a91a8fd99b05cb4e7d2895cda18b13906789c0f527'
}, {
  a: '-0x3696c81b488aadd37fc538743890b6487c81517b6bfea0818',
  b: '0x60651af227c0be92a8a70a9652e34ff88d737362a0fe6',
  r: '-0x3696a87e52788a13c15790d33206e4ab3379dc08189c007f2'
}, {
  a: '0x285b483177646341cbc51cb9d360619a56f809b05498c0874501d9b7a783037cd1b1',
  b: '-0xd29935113cb53837d90f192f7d6f35b9fd0b9dac7ed54812315c1023998e4343ad165f',
  r: '-0xd2b16e590dc25c5498c4dc33c4bc55d8675d65a5ce81d0d2b61911fa2e29c040d1c7f0'
}, {
  a: '0xb84d3b6af4d04dce46dc7f72b915a5b27adb8a453',
  b: '-0xf8a1469c08eab1a0c6c0ecca7bfc52338869d34d3fd070ecda',
  r: '-0xf8a1469c036e6216698de8169f9195c4a3f88916187dc8488b'
}, {
  a: '-0x14ac77eb65edfb73d62f75ba3d4cb184979b3eae0e99c4',
  b: '0x81cec540dcb0f2352b948cc6de96e93a4afb78df74c2c7',
  r: '-0x9562b2abb95d0946fdbbf97ce3da58bedd6046717a5b05'
}, {
  a: '0xc232580cc0c41f4b0c1c6478e0ef258aefe2eae5fa069ad1e6dede4fe4384234fb',
  b: '-0xce60af7d1db514071c78309dbb9ca94c38d',
  r: '-0xc232580cc0c41f4b0c1c6478e0ef258609e81d342157daa0215dd7945df2d6f778'
}, {
  a: '-0xee8e8c21a315129dafce1e1054d51f89321c',
  b: '-0x235bb24e0f032af72d70f5ca84b1f29969ba7af3ac6865',
  r: '0x235bb24e0feda47b0cd3e0d8191e3c8779eeafec255a7f'
}, {
  a: '0xfe8423c961007c3e2b8d0ef858731ed08ff86e238b515600b1af',
  b: '-0x7d0488407ae645057e1d2562b5c5577b7846b0f101ba06c368948bdf63',
  r: '-0x7d0488befec58c647e611b4938cbaf230b58607ef9d4254839c28b6ece'
}, {
  a: '-0x9d760c8050e7bb7140a4679dc546f1e5208170d4f3b5a9b124905c',
  b: '0x553ef538894b297891ea090cd166f8eb382fd7666c7d6733166fb090b5e5',
  r: '-0x553ef5a5ff47a9287651784c7501652e7ede3246ed0db3c0a3c601b425bf'
}, {
  a: '0x73a41633369ec40cd8a5127822c5d3b1135ee5f47bb721e03a9409',
  b: '0x2844fb85264e01b9866d33d201604c7d719a733bd2103069c07cb5e4ec7842',
  r: '0x2844fb8555ea178ab0f3f7ded9c55e05535fa08ac14ed59dbbcb9404d6ec4b'
}, {
  a: '0x3e103462775fa6e98871b353295dd37588ce98bd5a8c1ca366',
  b: '-0x2d88b5aabe0ed6f0fad931b11fb51361abae9d63b2d07ce',
  r: '-0x3e12ece92df44604e77e1ec0324c2824bed422548cb731a4ac'
}, {
  a: '-0xd9c501fd0f8aa2817cd02c532258266ee0ece759806d9cc9c926184',
  b: '-0xbb2f0fda3a67dd374213766901de50203653',
  r: '0xd9c501fd0f8aa2817cdb9ea3dffb80133398c66ee6fd812ccb257d1'
}, {
  a: '0xc88666665c1f6120047f2ff6c41f7fe0caefa1f23517a834',
  b: '0xa43e16e8d6bf515361358fbe8e74d7d5134c5912df2a24ce60b977d',
  r: '0xa43e16e45ed93736a0c39dbec98628b952bba71e71d03bed31c3f49'
}, {
  a: '0xce7c0f376c1e7d288a73fcd46dbbb08b937056cd4475fcba052554b94d',
  b: '0x6b3a69bfa00efde60c574373d781b8598bfe0',
  r: '0xce7c0f376c1e7d288a73fa67cb204a8b7cae36083042c1c21ea0cc06ad'
}, {
  a: '0x55001953824d3b4b875c78fdde1047b1ab3192837d70',
  b: '0x6053db1da8d807406c806ecec2d8d437e1cdaf56',
  r: '0x5500790059509393801c147db0de85697f06734ed226'
}, {
  a: '-0xb7afcf84054bf9131a7dbac5c5d019ed1f1439eb0d8',
  b: '0xbf6c0426dfe99b6b30b279c39144e5c2c0da8e923c837da1ae5',
  r: '-0xbf6c0426684654ef35f980d08b395f07050a977f2397444aa33'
}, {
  a: '-0x3072d4a28bcdb5d8dffce761001c903f150efed7da8cc13b24796aa37c9fd33446',
  b: '-0x790aeda7b0bb35e77c36ae0464441f9e7c385901d29bbfd9b5f62348674867c26a8d',
  r: '0x793a9f731230f852a4e952e30544030e432d57ff054133188ed25a22c434f8115ec9'
}, {
  a: '-0xa270da59f62acdc6e54a82722fa7f36d45e28026d',
  b: '0xb415d9c8208d9f58d702c7c6dd328ae04f17c27e1e0b2513',
  r: '-0xb415d9c207803ac7b5ae1ba8899aadc2b568f4aa40232780'
}, {
  a: '0x4b2d257718e8967e0dc8072ee3c7fdba8ae79ef6f',
  b: '-0x7393b845bbccee3f44bda7f183dfbb3de0a8cbdb3561',
  r: '-0x73970a97ecbd60b6235d7b71f13187423b0065a2da10'
}, {
  a: '0xeca835bca9a86628d046049fc431b0ec79cf86e',
  b: '-0x218df3b7caabb932d0d15078ec20ae4448b17e2a1e623bc',
  r: '-0x218df3b726038c8e797936503c66aadb8c80cec667adbd6'
}, {
  a: '0x10fee0281471d98411cffb157f57c872ad6d59081',
  b: '-0x96acd482881664c888c7cad47ca34d044f6058a8',
  r: '-0x19942d603cf0bfc8994387b8389dfca2e99b5c827'
}, {
  a: '-0x88ac5bcc75fda94cbe41aaef50f50d6b32c21d020934b5',
  b: '0x9c4d6f48b099c2ba74ee409d8de8486b5ce696389fc763996286632840fa2512',
  r: '-0x9c4d6f48b099c2ba7466ecc6419db5c21058d7927097969409b4a13542f311a7'
}, {
  a: '0x712c420ca3bc740a42848f251df4338682ef1eeed',
  b: '-0xd92a5dd5bd9428f6bbf3e02bbf4e2868643d1f869020a9f827161',
  r: '-0xd92a5dd5bd9459daf9ff4397cb446aeceb180272a3a62b1739f8e'
}, {
  a: '-0x518851b6ba61123a41b40e689309b0e553e17e0c64b59',
  b: '0x8c35c329ad7f531328edda945796e77ba5310665e1c7025331506c1f',
  r: '-0x8c35c329ad7a4b9633867c857432fc3b43b836feef923c44d1962748'
}, {
  a: '0xece86636167a2769fc02c821b99249a394f0e1314a70d466df213760a510eaf',
  b: '0x6b3116be9beb8ee76cb81c0f0ceeb9b7a793658732be5961490d1b363454',
  r: '0xeceed5277d9399d1127403a0796287480f8a98071203ff834935a7b11673afb'
}, {
  a: '0x3255895e1bb15f1fee8bc510a2594a67db2336474b3ac2f733df6fde2e4d3e824cd7b',
  b: '-0x2970a172e68d92086e74d1b0b5051b36eaf697c',
  r: '-0x3255895e1bb15f1fee8bc510a2594a4eab8244a1c6a8ca99470edf6b2b560868ba401'
}, {
  a: '-0xfe433f9566c310005106d19e201eec82779c1de17b5b199742a0c7fb96d8f3e9620',
  b: '0x9fdc4d8c1c77b4006867b43398db65d748cd4b310f13d2b95f2d899c8d2',
  r: '-0xfe433f95f91f5d8c4d71659e487958b1ef477836339652a64db31542c9f57a75ece'
}, {
  a: '0xad261633522d62cdff5e336e40b7e88c1a363c80e246d4346e0df76f89',
  b: '0x85c40200e65baa71f05eb0b2a056fd771e3f873801611e49202e941148aafb980',
  r: '0x85c4020a343ac944d2889c6d55b5cb9315410ff9a202d6470443d757a8758d609'
}, {
  a: '-0x536621ec9bbccd8b9df2052546358c0ab1ee274f8edac500bd2105756',
  b: '-0xbd346425eb2c5b4a8d18c7a0b1b57d92b146eda8124abe4d08d9f97bfdb3c03',
  r: '0xbd3464768d0db7d131d54c3d43b058d484cae719fc6df1c3d21cf9c6dcb6b57'
}, {
  a: '-0x8866d2cf242ab74e449a33eac7383e22a9e888125b899a773987205eda5818543ff6cc',
  b: '0xcf0b57dfe8e017d2fa49c02a94b788f9686f7b85df1cdc0ebd2ecc475eef8c',
  r: '-0x8866d2cfeb21e091ac7a24383d71fe083d5f00eb33e6e1f2e69bfc506776d413611948'
}, {
  a: '0x6b8b0e8dd7fa393502115c35d94418ae2e3b8b928318f61c9e32',
  b: '0x8df63bdf5f0cfa1824faa47276fee74042895c8396',
  r: '0x6b8b0e8dd777cf0edd4e50cfc160e20a5c4d7575c35a7f401da4'
}, {
  a: '0x122a927eff86f556a3928f5a21ab93389a2a9f073cadb0',
  b: '-0xd53a8c47b912ba2525d98ec3511a25b76dfad703044b5970',
  r: '-0xd528a6d5c7ed3cd0737a1c4c0b3b8e245560fd9c0377f4e0'
}, {
  a: '0x2c3d431be1c0979aa85e2dbff8f7158b39cbeb35eb4',
  b: '-0xd6c5460e17ad5b57d7f443c5f3fc1276ce290e6e5f9eccb9c5eef',
  r: '-0xd6c5460e17816614cc15835269544c5b71d1f97bd4a70752f005b'
}, {
  a: '0x996f837c17348b376c7391b366d77010900876baae7e446014b9377bd342106',
  b: '-0xf349b083899f544bea2e7acdfaab9e83819cdd63e0e6187635f7517',
  r: '-0x996f837ce47d3bb4e5ecc5f88cf90add6aa3e8392fe29903f45f2f0de6b5411'
}, {
  a: '0xfb4a095fbf4153e63f0510ec1db8e9a9306e970c06a0c6baa19400ad47da851a4',
  b: '-0xd4309e46d5128facd1f69f1eadad9dcfba3439549b395539',
  r: '-0xfb4a095fbf4153e63246190870e9c153fd71fefdec7a1f665a3743380e691049d'
}, {
  a: '0x15f49376caa81d8c9c271407e52bb27387b9ff14af',
  b: '0x78d6f26dcf58817a714ba0eefff546e9cd6552af638648761a1a285d6e5f14220',
  r: '0x78d6f26dcf58817a714ba0efa0bc718567e48a66a1f7080848a10f6515c0e568f'
}, {
  a: '-0xf9ad90d9d3ad62a82190ba852c18a1b6a21206c6f020e7',
  b: '0x436b0fbfc24c2dc23eaf64c7a94fb44613eb01f0f989b444e2f9713764f17660',
  r: '-0x436b0fbfc24c2dc23e56c957709c1924bbca914a7ca5ace5545b6331a2015687'
}, {
  a: '-0xddc837dd199d1711e90b5ce362a9531acdf8760175b11f55d64',
  b: '-0x61f002865f210c9b6b00a5865997159fb38a5fef77346b4503a75392e7cb',
  r: '0x61f0028652fd8fe6ba9974f74707a05185a0cadedbebec2514fc4267baa9'
}, {
  a: '0xbb6dd1baddbba99c3e9c5bf4d3c20a7ccb57f22dcb0a5a7b2351c072429d',
  b: '-0xf46073606a4ed91c4bb40a6b71761369a7fd08a721a893e',
  r: '-0xbb6dd1baddbba6da39aa5d503e53cec78bf1453aaa3cc004f3dbb268cba1'
}, {
  a: '0x5f10ce4f6d980f8e6403b7977fc4c67863a7511d126f918ad7',
  b: '-0x2b2cfaa97d9e7823f8c44d983c5ea1f9915c759c3d9',
  r: '-0x5f10ce4ddf57a519bde435a8f3801ffba64d4e8407a8c84910'
}, {
  a: '-0xd88e6da12a3e3f0353824df42e0b50132ad62ecb8d38d4dd41a803c0c32700775c1b',
  b: '0xae85597f42706ad2975bea647ac687a6bcaaaeafa1bfcd8',
  r: '-0xd88e6da12a3e3f035382471c7b9ca4342c7b07be339e937129d2680a69cdfa6ca0c3'
}, {
  a: '0x77e53d2b545366a4dc496013685fc02f923319c626174bcacabf64f',
  b: '0x8f1e6ef3ce9506eefa6891ac91f96556a1c7fad29c629d0f3fe7b7',
  r: '0x7f14dbc468ba36ca33efe909a140567af82f666b0fd1621a39411f8'
}, {
  a: '-0xf8dd8f2f7f17b70203e191b1878b5b6c3aae8ded00d4d414887c941de409cd6412e1e',
  b: '-0xeb9a900ad0d176462556bd203f97ccddfdd69cdf371c31f72f03d3',
  r: '0xf8dd8f2f7f17b70cba48911c8a9c3f0e6fc55feef9a819cb551559ee95cad216e2dcf'
}, {
  a: '-0x91903e7d30c52fe5fa5d46a528871d7714e096f47c261cfe9a',
  b: '-0x292fe0250d4bc71e7636a724a4011382bc973bd599e1d6ad34843c8494bd0c8af',
  r: '0x292fe0250d4bc7176f3540f7a853eddd19435187119001dc7a8d53c356dcc3637'
}, {
  a: '0x747c9d8a74d7ca46a4fad7fc11dfd9e9a14edd7ed3c07267cac41f7b0',
  b: '-0x2d40db59ba4657583ced94831fb2970a2a6796dfc76ba287df',
  r: '-0x747c9d88a0da7fdd009fa27fdf0691d85a67addc75b91f9bbc7e3706f'
}, {
  a: '-0xbfe3a4867a373a5ff778b509473deaa8aad5394afeb6dbe4f83f14',
  b: '0xd77b9104c2a65ac03faa46e5e05149f45b72e7e93d0934',
  r: '-0xbfe3a486ad4cab5b35deefc97897ac4d4a8470bea5c43c0dc53628'
}, {
  a: '-0x27b5ea5e790f3a70e7a9bfe79f076736521486abf2f14613',
  b: '-0xbf08684dd6dabc920b0842fd1bc347bbc758d5559f491c09a5d16cb6775f6a',
  r: '0xbf08684dd6dabcb5bee21c8414f9375c6ee732ca982e2a5bb157c74486197b'
}, {
  a: '0xbf1e8cad857aa8ad758296d1ba6822240267106e36e22e78758234bf18d4e5492f1d',
  b: '0x3b150281999f8c49451e1c270d4c0eb62b76779a7eb514b31',
  r: '0xbf1e8cad857aa8ad758127819271bbdcc6f3418ff492fab89ee083d861730e18642c'
}, {
  a: '-0x71a83a5cdb651a775a4cb8a4d91a0b10a199c9ee1f2412c7a996',
  b: '-0x9f192c6c2e30644f7506e862886b8b8c9868dfa90de4bb',
  r: '0x71a83ac3c24976596a28f7d1dff26998ca12457677fbbbca4d2f'
}, {
  a: '-0x2a1c6e73f424d4588f2340f2df38a4cba6904664c3d7663a3',
  b: '0x7227228e8a02b8fefcf34abb3814674e75fb937',
  r: '-0x2a1c6e73f456f37a01a9424a21c457811da852038da29da96'
}, {
  a: '0x2c5791b8bdb958ecafb7c0506a81deeb552eb5f7ac23894b1f4d39f29add0',
  b: '-0xd8ced0b82b12a495839c0573ec4c2550f2554361e',
  r: '-0x2c5791b8bdb958ecafb7189eba39f5f9f1bb366ba95065073a1dcba7d9bce'
}, {
  a: '-0x256f4039fa5fa05910464de3c2d76b3cb4708c83962344db8137b0148bfc48',
  b: '0x9f6cc1a9889b872640499b68a8bfe5c53393a195591b2e8bf36',
  r: '-0x256f4039fa5656950adec45bb0b36fa502fa077dca707de1986221a6634372'
}, {
  a: '0x5296228f24c5d2c951d711d5c81cba73c35e32f5c60fd',
  b: '-0x91536668cc372710c7294557393b02c445fc4ea66eedf22299d143b9c2a80a462',
  r: '-0x91536668cc372710c72917c11bb4260197351f717f383a3e23a280e7f05dcc49d'
}, {
  a: '0x9a6e31251f5acebdecfaaff4680ecdf943a3a50954ce8ca32757c16fed',
  b: '-0x2eda02103257a1e3b7fc3e2c92bc4c75cd3',
  r: '-0x9a6e31251f5acebdecfaaff685aeecfa66d9bb322b0d6e6a0c93063340'
}, {
  a: '-0x95b464c6fc025b1ced86465c3e0973478c827d64f5ac8cdc15c0c2f48e68',
  b: '0x7be14137e447030d63db2e15d9ec1a5563be07d9b90f6bca4a4bbed8fd2fc',
  r: '-0x72ba077b8b8726bcad034a701a0c8d611b76200ff655a3078b17b2f7b5c9c'
}, {
  a: '0x6156ad30b7386a5b30dcdbbf32338db8364cd15e9d18',
  b: '-0x307cbf24b5bb1eb6779cf8e4962996c568e0281da929baccb55',
  r: '-0x307cbf22a0d1cdbd041a5d579be42d364bd8f39ecde4af2564d'
}, {
  a: '-0x6d2e5d60bb496772863d3528118ee7aab09e429cd850fe99f84e0d26',
  b: '-0x3aa60966b06a24e5b8f453d976d7a386b8cd4700f928fc',
  r: '0x6d2e5d60bb73c17be08d5f0cf43613f969e8953f5ee833def8b725de'
}, {
  a: '-0x5635d7796d8035e4e92caa9a05b22003bc2ff781f7af6aeae39d386e3df',
  b: '0xe2265b18518c19a71efaf1a7308e6a05ffd1a3829b0c91050c2329c77aa2beda6aa',
  r: '-0xe2265b1807b9cede737ac443d9a2c09ffa63838127236684fb8c432d993f86b4575'
}, {
  a: '0xe93db5ba153462d2f17986f40762ee36aa777297df58eb7045742524cfc2d793a68',
  b: '-0x23c41cab5e76a4209c091f38180e5833a80e36a7d319a1ba28',
  r: '-0xe93db5ba153462d2f345c73eb2858474a3b7e3645ed80ef37ff4c64eb2f34d88050'
}, {
  a: '-0xf21fc2604caf84a8d6f1264f52d83aa4061a5db409234a8b9cf6',
  b: '0x8c47ea3cf0290c17325c6f3e14294c6ef46849e9f',
  r: '-0xf21fc2604ca740d6753e24df93ab1f62f5fb1f20cfcc0c0f026b'
}, {
  a: '0x70289ff462bfdc38d63cb2826e3652cf7462dea2c31c6488e4',
  b: '-0xe9d169dfa03a4adeb45542d5d369033166776d6c6f759c',
  r: '-0x702876250b607c029ce206d72ce381a67753b8d5ae700bfd80'
}, {
  a: '0xcd7a6c899713035abae0eee467a28872128cfb70ed55c64d8b464a51df1bd86a938fd',
  b: '0x2fcfa7920a8323053469129d3ac9e790fb6cb91b40e695058b407220d1a6f72d94cf1',
  r: '0xe2b5cb1b9d90205f8e89fc795d6b6fe2e9e0426badb35348000638710ebd2f470740c'
}, {
  a: '0xc5c952cc76f380603eb5cb9655d171114a897c3be3e2c332ddad706e5',
  b: '0xc19c77b95e79c48dd6a46f415e84ba82b56458be9d06ec27f',
  r: '0xc5c952ccb76ff7d960cc0f1b83751e50140dc6b956869b8c40ab9c49a'
}, {
  a: '0xa0444cf6c117d07aa05566aef9868e51bf8bffa3',
  b: '0xd47eb31ccdfc015fcecc8d80a1033bd2e69e00add40db82a71befba0',
  r: '0xd47eb31ccdfc015f6e88c1766014eba846cb66032d8b367bce350403'
}, {
  a: '-0x389d24a8127589ad61c0e751811c39aa064f80aed237e74a5b6977ba94f26f',
  b: '-0x5e31f653b8e595e4ec84a47edb425993dc1579516e40549ead0aa50b73bb712af2c',
  r: '0x5e31f5da6aaf14c3b41e7262d53741821f8fd935964ab9bdd37e00bde4c0d865d45'
}, {
  a: '0x3cc44c8502d8bfa44104c73f601b66debee308e',
  b: '0x6f1104c2f1f82a2d64c11626643d3e355b8dca3',
  r: '0x53d54847f320958925c5d119042658ebe56ec2d'
}, {
  a: '0xd2a54b3e94948c8249323dfa90f4e073c3227551c0a7a09945092bd8',
  b: '-0x3c4323bc49e9c5aa497363524d36be9a76c3ddb2e6746e534',
  r: '-0xd2a54b3d50a6b746d7ae675e07c2d55710499cf6ac9a7bb7224fceec'
}, {
  a: '-0x3e89e5225c2f2dacf36ab5b47126604f81be6c4b815c0',
  b: '-0xb08893125f18801d576fb6347ff80732c62e714fca36ac8df8c6ea31bf5',
  r: '0xb08893125f188023de8a946850d5abc1ac9bc53eec56e30c46aaa1b0e4b'
}, {
  a: '-0x346d605bb7dd71bb87c742126cd2af135da99a3ca2c07eb8ecae263894',
  b: '0xa7e9d891bdbb4eec60f3c0b54c8c052320a64edf51c34578e9e8',
  r: '-0x346d60fc5e05e0063c89ae729f121a5fd1acb91c048ea1e92feb5ed17c'
}, {
  a: '0xbcd7a67b2be1f4cc8546c72fee93dab68a77c464bb3cc825d7dcce7ca93d58',
  b: '0xc84cf04e6b376ea59cc863e2461b4e8d7c206d451',
  r: '0xbcd7a67b2be1f4cc8546cbab21973c05fc9d9da83d02ec44633419beafe909'
}];

const dataSmall = [{
  a: '-0x9d46e9',
  b: '0x694836',
  r: '-0xf40edf'
}, {
  a: '0x90d486537db3',
  b: '0x12f428',
  r: '0x90d48641899b'
}, {
  a: '0xd1d7130765f2cef',
  b: '-0x7862502b9606666',
  r: '-0xa9b5432cf3f4a8b'
}, {
  a: '0x0',
  b: '-0x62',
  r: '-0x62'
}, {
  a: '-0x7ce608bf8fb',
  b: '-0x4f8c9',
  r: '0x7ce608f0032'
}, {
  a: '0x0',
  b: '0x4cb',
  r: '0x4cb'
}, {
  a: '0x9c2354f99df5e811',
  b: '-0x82d9d3395d099de0',
  r: '-0x1efa87c0c0fc75cf'
}, {
  a: '0xb866c613d69e1',
  b: '0x0',
  r: '0xb866c613d69e1'
}, {
  a: '-0xa7',
  b: '0xc3a5cf5f',
  r: '-0xc3a5cffa'
}, {
  a: '0x98b613fe297dd',
  b: '-0x5bb4c445f0b0',
  r: '-0x9d0d5fba76773'
}, {
  a: '-0xf6d',
  b: '-0x5aad2',
  r: '0x5a5bd'
}, {
  a: '-0x5084ff386e49',
  b: '0x90e6398fe9e',
  r: '-0x598a9ca090d7'
}, {
  a: '0x92c08db55be079d1',
  b: '-0x631',
  r: '-0x92c08db55be07fe2'
}, {
  a: '0x1bf241',
  b: '-0x81b02',
  r: '-0x13e941'
}, {
  a: '0x0',
  b: '0xbe6888205e0ab',
  r: '0xbe6888205e0ab'
}, {
  a: '0x5add2ce15201',
  b: '0x473adbcc35b6',
  r: '0x1de7f72d67b7'
}, {
  a: '-0xb11ef70eb04',
  b: '0x9c',
  r: '-0xb11ef70eba0'
}, {
  a: '-0xf8764',
  b: '0xf077b70e9e1f3',
  r: '-0xf077b70e66691'
}, {
  a: '0x2d2d00c',
  b: '0xe8',
  r: '0x2d2d0e4'
}, {
  a: '-0xfef03a8a75',
  b: '0xb7d8214c7e09',
  r: '-0xb726d176f47e'
}, {
  a: '0x3d32095',
  b: '-0x5ad641e0',
  r: '-0x5905614b'
}, {
  a: '-0xca2c',
  b: '-0xaa28c',
  r: '0xa68a0'
}, {
  a: '0x38',
  b: '0xa39cae47492b50',
  r: '0xa39cae47492b68'
}, {
  a: '-0x30',
  b: '0x9d4',
  r: '-0x9fc'
}, {
  a: '0x0',
  b: '-0x1f',
  r: '-0x1f'
}, {
  a: '-0xf74',
  b: '0x99716141cfb896',
  r: '-0x99716141cfb7e6'
}, {
  a: '-0x285617fa82cc66de',
  b: '-0xafe57b6af02ccdd',
  r: '0x22a8404c2dceaa01'
}, {
  a: '0x65',
  b: '0x0',
  r: '0x65'
}, {
  a: '-0x3',
  b: '-0x47',
  r: '0x44'
}, {
  a: '0x7',
  b: '0xf1830c307',
  r: '0xf1830c300'
}, {
  a: '0x86e97c',
  b: '0xa',
  r: '0x86e976'
}, {
  a: '0x0',
  b: '0x9',
  r: '0x9'
}, {
  a: '0x7c048',
  b: '0x18bb7e961a70',
  r: '0x18bb7e91da38'
}, {
  a: '0x66591fbc0e16b354',
  b: '-0x45',
  r: '-0x66591fbc0e16b311'
}, {
  a: '0xdf3c996ca1',
  b: '0xd5f',
  r: '0xdf3c9961fe'
}, {
  a: '-0xd',
  b: '0x102ebb240',
  r: '-0x102ebb24d'
}, {
  a: '-0xec72533',
  b: '0x2e04',
  r: '-0xec70b37'
}, {
  a: '-0x44ae2e93d',
  b: '-0xdeb355313af2c4b',
  r: '0xdeb3557594dc576'
}, {
  a: '0x0',
  b: '-0x1b',
  r: '-0x1b'
}, {
  a: '-0x628b2b0',
  b: '0xad223345d4d8ca',
  r: '-0xad223343fc6a66'
}, {
  a: '-0x97c',
  b: '0xf632',
  r: '-0xff4a'
}, {
  a: '-0xff6088cec208e0',
  b: '0xeca8492',
  r: '-0xff6088c0088c4e'
}, {
  a: '0xd',
  b: '-0xbd098f42',
  r: '-0xbd098f4d'
}, {
  a: '-0xfdee61a28c9d34',
  b: '0xfbcb8b3c0',
  r: '-0xfdee6e1e342ef4'
}, {
  a: '-0xfcc',
  b: '-0x63',
  r: '0xfa9'
}, {
  a: '0x1',
  b: '-0xe243d157dcf3d08',
  r: '-0xe243d157dcf3d07'
}, {
  a: '0x744a44c3e43',
  b: '0x0',
  r: '0x744a44c3e43'
}, {
  a: '-0xbf44',
  b: '0x3dd328c5',
  r: '-0x3dd39787'
}, {
  a: '-0xc84ed0d3d',
  b: '-0x135',
  r: '0xc84ed0c08'
}, {
  a: '-0xd99c952644e4715',
  b: '-0x2',
  r: '0xd99c952644e4715'
}, {
  a: '-0xa6a5e3c668e',
  b: '0x4550',
  r: '-0xa6a5e3c23de'
}, {
  a: '0xd65f5d093f421ed8',
  b: '0x7497518687fb2337',
  r: '0xa2c80c8fb8b93def'
}, {
  a: '-0x594',
  b: '-0x4115b2a37',
  r: '0x4115b2fa5'
}, {
  a: '0xfc',
  b: '-0x3b798006aed34a53',
  r: '-0x3b798006aed34aaf'
}, {
  a: '-0xcf64ccd1e',
  b: '0x8e789e70d6',
  r: '-0x828ed2bdcc'
}, {
  a: '-0x7c9cb1663be0',
  b: '0x40c54cce89',
  r: '-0x7cdc742af557'
}, {
  a: '0x5716db87eabd167',
  b: '0xde08aa371',
  r: '0x5716db59e217216'
}, {
  a: '-0x9521fc53',
  b: '0xe481939ecc668142',
  r: '-0xe481939e59477d11'
}, {
  a: '0x5321b805fba9',
  b: '0xf7a6b46',
  r: '0x5321b77f90ef'
}, {
  a: '0xdf10',
  b: '0x2ec02d294a823',
  r: '0x2ec02d2947733'
}, {
  a: '0x0',
  b: '-0x1ac32',
  r: '-0x1ac32'
}, {
  a: '0x3f781eb0c',
  b: '-0xb',
  r: '-0x3f781eb07'
}, {
  a: '0x7746461',
  b: '-0xc10b8bc2c',
  r: '-0xc17ccd84b'
}, {
  a: '-0xbe7061485',
  b: '-0x7ab47a19',
  r: '0xb9db26e9c'
}, {
  a: '0x4a4b0',
  b: '0x8',
  r: '0x4a4b8'
}, {
  a: '0xe9b',
  b: '-0x200',
  r: '-0xf65'
}, {
  a: '-0x8',
  b: '-0x41032ed858',
  r: '0x41032ed850'
}, {
  a: '0xb5a72ee',
  b: '0x34611a957',
  r: '0x34d4bdbb9'
}, {
  a: '-0x4',
  b: '0x273927f8b200b',
  r: '-0x273927f8b2009'
}, {
  a: '0x2fac1c73b',
  b: '0xa7c',
  r: '0x2fac1cd47'
}, {
  a: '0xb3dc46b',
  b: '-0x52',
  r: '-0xb3dc43b'
}, {
  a: '-0x319',
  b: '-0xd384',
  r: '0xd09b'
}, {
  a: '-0xac06890160e4e56a',
  b: '0xf2e',
  r: '-0xac06890160e4ea48'
}, {
  a: '-0x29103047f7',
  b: '0x14cc180fbdeee',
  r: '-0x14ce890cb9919'
}, {
  a: '-0x3',
  b: '-0xdef565d1',
  r: '0xdef565d2'
}, {
  a: '-0x4',
  b: '0x0',
  r: '-0x4'
}, {
  a: '-0xe',
  b: '0xbfa3be7d81816f',
  r: '-0xbfa3be7d818163'
}, {
  a: '-0x653be',
  b: '0x0',
  r: '-0x653be'
}, {
  a: '-0xa',
  b: '-0xa',
  r: '0x0'
}, {
  a: '-0xbff451b21b',
  b: '0xc',
  r: '-0xbff451b217'
}, {
  a: '0xffe9f06b7ccf',
  b: '0x419',
  r: '0xffe9f06b78d6'
}, {
  a: '0x0',
  b: '0xb',
  r: '0xb'
}, {
  a: '-0x1fe30c524',
  b: '0x0',
  r: '-0x1fe30c524'
}, {
  a: '0x39a2c2',
  b: '0x6',
  r: '0x39a2c4'
}, {
  a: '-0x7d',
  b: '-0xff50b1f6625e9',
  r: '0xff50b1f662594'
}, {
  a: '-0x7af29787e0',
  b: '0x12',
  r: '-0x7af29787ce'
}, {
  a: '-0x6d821c1b9a0fc55',
  b: '-0x89be',
  r: '0x6d821c1b9a075e9'
}, {
  a: '-0x9cc759c',
  b: '0x3af364d37b25',
  r: '-0x3af36d1f0ebf'
}, {
  a: '0x91a355822cb7f',
  b: '0x0',
  r: '0x91a355822cb7f'
}, {
  a: '-0x5a230',
  b: '-0x367b4500b8d',
  r: '0x367b455a9a3'
}, {
  a: '0x6718',
  b: '0x28ad',
  r: '0x4fb5'
}, {
  a: '0xe8',
  b: '0x444b3f2917859e9',
  r: '0x444b3f291785901'
}, {
  a: '0x64c9e',
  b: '0x3f8d104842',
  r: '0x3f8d1604dc'
}, {
  a: '-0xda44a0696a2e094d',
  b: '-0x2fe',
  r: '0xda44a0696a2e0bb1'
}, {
  a: '0x55c744cfa04957',
  b: '0x235734d4a919',
  r: '0x55e413fb74e04e'
}, {
  a: '-0xacfa14e2',
  b: '-0x31ae30996d1',
  r: '0x31a4ff38231'
}, {
  a: '-0xf4e7d7a1dc988a',
  b: '0xd8a03',
  r: '-0xf4e7d7a1d1128b'
}, {
  a: '-0xdb65d9703ecb',
  b: '-0x59969771df',
  r: '0xdb3c4fe74f14'
}, {
  a: '-0xcb3',
  b: '0x0',
  r: '-0xcb3'
}, {
  a: '-0xce7',
  b: '0xc680b9f1a3ce23b',
  r: '-0xc680b9f1a3ceede'
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
    const r = d.a ^ d.b;
    if (d.r !== r) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: ^');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a ^ d.b;
    }
  }
  return Date.now() - t1;
}


function testJsb(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = JSBI.bitwiseXor(d.a, d.b);
    if (!JSBI.equal(r, d.r)) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: bitwiseXor');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = JSBI.bitwiseXor(d.a, d.b);
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
