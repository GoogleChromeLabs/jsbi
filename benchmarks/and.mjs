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
  a: '0x2c8af69a8020c09266fbe8a9935525cf5e4404596b000df97fd807e9',
  b: '-0xfec6e4d4adb4205791efcf1e1a4388e7d9a7a6577a17b51c11bb',
  r: '0x2c8a00180020400246a868001041258c56000458490005e84ac00641'
}, {
  a: '0xe108c963117b6928513fc26d6c43506be80bcec890f359c867a53d',
  b: '-0x1073b488881a3c5f21409f2b62c73a1fda3a1ce1fd89ec490c928f8cce191d1c05',
  r: '0xc100c8230050092841200045600200620002c248107311c062a139'
}, {
  a: '-0xc669adc8729c149e221da90f1f22d1c576a9af3',
  b: '0x65cbe2770c79535f2f19806eb78bb094f873e9a8217a2a3c47bf9a4fb39d887917f3e1',
  r: '0x65cbe2770c79535f2f19806eb78bb09098612128003a221c46250a0e01908028156101'
}, {
  a: '0x1ae376d7dcb220f5e023bd7bf76d958b2cbb4bf3845f481c537b16',
  b: '0x5f1adc0e8629b8746160a6267e411557610c7007b3f',
  r: '0x20a5c020201b8744140a2023401104560004007b16'
}, {
  a: '-0xf58a061827841490817c7830c6ff7a2c0aa38b73',
  b: '0x4a8ca99c03ee405d08508888c8caf96f574273f355e71d536d2bd1d68f52a04',
  r: '0x4a8ca99c03ee405d08508880804a986d070232f340201c53000851160542004'
}, {
  a: '-0xcbf17fe73d2455ffb0bd15587fa66209fe195b0165158b48b192f46658fa3efe',
  b: '-0xb7352e2b07bedc8e4a3fef4c2148d158b4020107db6e20bf94c8a724f09d35745ec3',
  r: '-0xb735effb7ffffdae5ffffffd3558fffef60bff1fdb6f65bf9fc8b7b6f4ff7dfe7f00'
}, {
  a: '0x50434cc9ee6c0cff0b068fa4bd89c509ddb0f76cb48cbf4325469147c8590c',
  b: '0xd510a3ec7795858793cfa607ddd5af7b88fb8848e6',
  r: '0x8500a18845018580934ca4049d4125428043884804'
}, {
  a: '0xaaf2feac9b1554e5efee980cba6acb9ef2ba372e463e6d4d79cfa1f076def',
  b: '0x3c5f7c1dcd99807645ccc125e9dc81dcff52466cdae6df240bb7779a055',
  r: '0x305e2c19051080664488002068c880d0ba1206441a644d200ba17012045'
}, {
  a: '-0xac81c803fcf31df5afa85fc3535d8c0b8eaa484ff9ab51e92e8a2183907e40e',
  b: '-0x886fea1e49dbfa28f44960690076afd9a95cb',
  r: '-0xac81c803fcf31df5afa85fc353ddefeb9eebdbfff9ff59e96f8a77afd9ff5d0'
}, {
  a: '-0x6d6d4aec0200ed7a86eb021bff680b9cfbed1db84131400553892b662',
  b: '-0xdddfc5d9614029e5ab32461e26b3fcf6293',
  r: '-0x6d6d4aec0200ed7a86eb02dfffeddbfdfbedfdbb73775e27f3fdff6f4'
}, {
  a: '-0xf3aa51d1ac373d281d1cac199255521770bf504c5ab0cefc5ddf220d325c26',
  b: '0x336e8b3fa7b4146d3b38df985cf910a3bb4eb559464a1d3',
  r: '0x322e013e2690004c08300a98185010003a020559044a1d2'
}, {
  a: '0x84d37f288d65f56dffa637bce908f6c8cff8fbfe33d686b',
  b: '0x41e205f28c4c3a2ad456a1c5ee8ddb647bce8154a2bbb0b8595f',
  r: '0x4004400802545681c06209ca000b4c805482bba038484b'
}, {
  a: '-0x6b8fdd74b9797d834e2a35ddd8ea784b0ee02',
  b: '0x5220236762c2dd277b0722206fa1218a20aaece337eafe',
  r: '0x5220236760420020300020204b010082202048630700fe'
}, {
  a: '0x37306b8ea7521ce206a1bcfd2dc81db97534f87090c7e71',
  b: '0x32f4b7729dea195632405309e1be6b92309a',
  r: '0x20c4206219ca105400401301418609003010'
}, {
  a: '-0x4dc965821c0ae43a234d1fec384b56a2bf62753591ae63df59e825007d',
  b: '-0xf6df67a5b9c9b82b2ff6fab0a6e4372b7b7cb9e42a2657b8679eaec846e0',
  r: '-0xf6dfefe5bbddbaef3ff7ffbfeefc7f7ffbfffbf53fb7fffbffdfeeed4700'
}, {
  a: '0xc7767274ab28b3ac9d8572de035a81ea330d9851ee6aa5114440a81',
  b: '-0x99e39470e2ce525d1ae304872ff916263320d0c254b5cf',
  r: '0xc7767274a22082a8918112da025081a2010008118c48a0114000a01'
}, {
  a: '0x411b41480995392ca44123ab0d54da8c17b7fd2b6',
  b: '0xd7a7e02a38681f4d94e333b4a44350cb7e18c91a4913c76',
  r: '0x18400809942120a400030009541888120111036'
}, {
  a: '-0x26575515229d562cd642e25253979f04ea35113bd762f41f8b633e637625ee2',
  b: '0x92a293d1c23a5194c87a36ba4cea4834bfc5d8a11a629',
  r: '0x9000818040205114c86a04280c0a40349cc198811a008'
}, {
  a: '-0xfb4e65f88b77629ab279ff93c4d28d193bec25d0371b7d929e',
  b: '0x9a6594412817060cf1d02da220bea01f45a8db98ec72e54fedf7b4',
  r: '0x9a6504010807040891400d82002c200d40a0c010c822c044806520'
}, {
  a: '-0x6fa8a311921055c13362abc9bcef5409d87a91107c0da82c6971ca7',
  b: '-0x7c756b0e1e720e9fa62fd74d04979ef24e03691',
  r: '-0x6fa8a311921055c17f77ebcfbeff5e9ffe7fd75d7c9fbefe6f73eb7'
}, {
  a: '-0x84c54aa1ffb66751ccb20b6a204edd247d5f9c66f8b5663dd44706ab9e3cb26c308',
  b: '-0x6694ce28c39b62d1ad1cf8d1dd20bc117c342c6922b07e101f2364',
  r: '-0x84c54aa1ffb66779ccf28f7bb66fdff5ffdf9df6fbf577ffd6c796ab9ffdb3fe368'
}, {
  a: '-0x3c82a4dd475258ac8832ae0310a257219991916a72b9',
  b: '-0x2e9901cea90bcf30ec99c94776d6b489e3cfa5edf57c217a7a0932',
  r: '-0x2e9901cea93fcfb4fddfdb5ffedeb6afe3dfa7fff5fdb1fb7a7bba'
}, {
  a: '0x2e085fceadc754c7d4a2c18ed117ad72b235',
  b: '-0xe6174f2fc5c7a7f843565ff379517311ef87f881b0b6ed0ef825c8',
  r: '0x28000c86ac8444005002400e4112a1029230'
}, {
  a: '0xcbb5ca9b4710606e25c59a8e07a4d8c83929c6da60db5e355f5a0b4d9d5b0b9',
  b: '0x4387db1b6131344c2bebb80b4a7b0dd70fee8628a891cd94bf1',
  r: '0x400601010000040408c83809425a00d30e24060808018d100b1'
}, {
  a: '0x9aaa779ef2afc92b9de8675455544d237d6dd69eb5f830be448a105f26fe4a3d2b9',
  b: '-0x73e99a70b84e918b2d50a015ba04de04584a45b328e',
  r: '0x9aaa779ef2afc92b9de86754041445034521461490a810aa448a005b26b40a0c030'
}, {
  a: '0x51c58f92174da3d6769d5de9d663619eace0936cc7ffe8b4',
  b: '-0xa2e61a7d0b4efc0ff84852a0d1edbee1e2c5bd2e7e65188b1bbcf3c98b15c5b063ecea',
  r: '0x51040200160d2242508118e15460410c24608228479c0014'
}, {
  a: '0x173b0b24809a846cc51fbc4480dd4d02df1a1b1a8dad9ee8',
  b: '0x207ca724f33f5f20efde8381c52f8173231226089',
  r: '0x8a004c0115b00480c808005218131201200088'
}, {
  a: '0x44c5243135b85adaf81bef1adc8973d3f0a20b945d70b40794',
  b: '-0x746194288fa1eeb499ce05abc7f5b7361de983333bbdccd72e76ada0226c',
  r: '0x4401002031b850180808c902140840c0402208900950140594'
}, {
  a: '-0xfb810777a090ed96d1400bb23908181ced6f9a91454e8965c340f4a1828f7e4f88bf',
  b: '0xd1dfd9f632f9eba14e70c157136a74c3d27',
  r: '0x10650e2221169a14a70814713081003501'
}, {
  a: '-0x5bb8db382bf3506d7c1cc971a6f9dfe99d8a92c',
  b: '0x884ef7c63dd9c9e746959a310ef1428269505',
  r: '0x4c7c40c89808342148a110620020261404'
}, {
  a: '-0x9f4ff1ff44096fc9e97ce581e05ed887c06748535edb5b761e9d',
  b: '-0xa8adc2dccf5c957a45e8197ec7c3701abd799d944c7bbbbe8f5f4b128b3',
  r: '-0xa8adc2ddffff9ffe45fefdfed7cf781ebdfd9dfc4e7fbfbfefffff73ebf'
}, {
  a: '0xea4504d0008d55b3f6482d00b24e7638d71beb45d2468cb2dea5fe83a7637b8bb3',
  b: '-0x3ee869bf338b714d189893360bdc7a787d025e431fe4ea46f01f694017',
  r: '0xea4504d000051400c4400c00a2466408d4038105824480b0c00114810760128ba1'
}, {
  a: '-0x5a5dcdd705d8caef10e198b74bc816472db6a0fb2ab',
  b: '-0x1f44433aa92c6da6083e510a914eb35ae1d7f7',
  r: '-0x5a5dcdf745fbeaffd6fbf8b7efd8bf57efb7aeff7ff'
}, {
  a: '-0xf937b88d8139316e9b9052951e99ecefd8423791562a2fd288123025163dd725df0071',
  b: '-0xc815ef640c4415b60f501b51018754d53a931c2ddf51c174807a9858db0b3f',
  r: '-0xf937b88dc93dff6e9fd457b71fd9ffffd9c777d57ebb3fffdf53f175967fdf7ddf0b7f'
}, {
  a: '-0xdd743fd2164cf8813d227c5d018faac8bc6375a9ed4a3ec81bf71a9f65192',
  b: '0xe29f0f58879b533c9efce423fc2d2cd011c0a070d9bb611833213c8d7e3',
  r: '0x82800d48830352009c80a02270052440108000109181210000212088662'
}, {
  a: '0x3ebd10b81563408724f6309de6c61095266896bf184c30',
  b: '0xf7428c067f6ae61a39f6391dcd21f31af590a73fd8621626e30a16b95c2a4f82d57863',
  r: '0xc2110181500000700621004e202109104280682104820'
}, {
  a: '-0x4d77d98199fbcc1d0844b40792cc9c1708b2149e75da177c',
  b: '-0xa24b1a18b581808fe663ed95945888981ef781a33048160e38712',
  r: '-0xa24b1edffd99999ffee3fd95df58f9bcdff7f1ab3149f75fb977c'
}, {
  a: '0x523a8bea6f05741a9ac068271ca612f91f2dd9382',
  b: '-0xf4513e31ecbe23b907224bfffb150bb6536b33dd6a',
  r: '0x122808e02405440a88c040000ca60098090cc0282'
}, {
  a: '0x985aeb0a2944d790dea361a2e25936c906961ca55d98a4b55a11ed9',
  b: '0xae37826345aa10f16dfbec0ca7d33ee6422a2e1205a5d7027418a401fe0d45caae',
  r: '0x800a020a2840c21012a26022a241204804100401080004a05010a88'
}, {
  a: '-0xf0598ba621849825848147a91b95604cd55e00caf7c1b18dab35',
  b: '0x612617303b85c70eda83676924a5b63d6e8aa97b756ce6951b61a02f19b11ca1920',
  r: '0x612617303b85c700da03450924a43425268a816a4428e2100a01a00001a00421000'
}, {
  a: '0x28fbb67d56d7fb5b2b131518b3e4459c6607daafad6e6ba02b29e990',
  b: '-0x1d4d45187e1defc72ed5727a26ed5c74f9c7bbc27980a75cb779c6ceef43cd9f157',
  r: '0x2003841000d059112a10100080404004640210882102010003200880'
}, {
  a: '0x83b1bfa551d356b4a7e3cdf66cb4df216c000c8178613be8',
  b: '-0xd79a3fee15926e4aff47e8cb8f31e0e071313283592a',
  r: '0x83b128254011422481a100b0043450000c000c80486022c0'
}, {
  a: '-0x7e1f5e1b4a7b74f3b7974e6e1010d7d6d7ff141ae80c0172128a8',
  b: '-0x58ca3aa7109ed203c6cb923dba1d85ea5edc59060ff6b76c9cf9b23223f5a3abc28',
  r: '-0x58ca3aa7109ed27fdfdf9b7ffb7df7ffdfde7f161ff7f7fffffdbafa2ff5f3bbca8'
}, {
  a: '0xda72856c165e261b7db398628518bb8094b4e',
  b: '0xdcdf2f0075e90a836249ec85a84ba620ee141f7bfc37fa042644b8a4',
  r: '0x9a4000041242060141b398420500020000804'
}, {
  a: '0x546d64c5f7f0c531e6d0da61ccdc3561059de77e6ecf3f0af5bca949',
  b: '0x9733c8f65bfd757222742b4ff0dfc55566280d5865cbf82e6b85a051456f55ed4ef',
  r: '0x5445200542b0c501e450526080d404400580e6384a051402f51c8049'
}, {
  a: '0xc5336fc7b87e5df25cbbef6e198c45384e2febe074e5f911c',
  b: '-0xeb5e056b947619268ad13a627ff81abfa91ac37d415cf0027a942ff6b3d6',
  r: '0x84210742a85858005c10056e11880128002fc840340090008'
}, {
  a: '0x6a061027c4cf3a2e2d24d258700aafef734e85bad5ebec15e',
  b: '-0x7029ea330d27ef7178d3db8a75650651d7cc2038dee770028edadee7e',
  r: '0x62001006840c20240800d00820028fc7210885b8512120102'
}, {
  a: '-0x58a1533052fa79f1f21f1afdc760e08dda27517496f2c36954f43133b',
  b: '0xd2470fa7f82efc7603af0f7f65b2bbfd443f8',
  r: '0xc002088718222450028b090d2492ab09440c0'
}, {
  a: '-0xe8aad2b3462a49a206fc426fa11dc8f6cd7f333a6297de2f86d39a205608907',
  b: '-0x4aa38645d286dc7a3ecfc5072debbcb693a60e185',
  r: '-0xe8aad2b3462a49a206fc426fa39fcdf6cfff7b3eefd7df2fefffbeb3f60e987'
}, {
  a: '-0x51cdfe83ef238c15b835d0ecba133b30b96e10f1edd850f11919a8e41423f511a33517',
  b: '0x8b3934d688ebb032c1eaf4fa15dee5e159d2ab7d82f4f3f609f10567edaa60d6',
  r: '0x8101452884380220140e4c0054681e10812232d02e4e25609e10402ec0840c0'
}, {
  a: '0xb0f354c56120d42ddc2018d719e812ed4dd52d8e652efb86d11419205799',
  b: '0xe4f3dd155d2d0b56071268cfbd86795c965f0d4ac',
  r: '0x815114012c005402106042ad806910001205488'
}, {
  a: '-0x613ae8cf69dc20d53527779cb78fe8998077212e52d758b1b28bc',
  b: '0xde5d59d9adaebc3cb624696cf7103a0585935b06a6f84ae6dac88',
  r: '0x9e45111084229c28820008604010120405805a00a428024648400'
}, {
  a: '0x25c01234d61a5f8b9ab712fd5436897e477b3b61a262f909e39dcfb8b4dfc942ae',
  b: '-0x8a533527c022f81c46cf80d937b18d25a73c687f71035281a3a2bfb077083fcb8',
  r: '0x254000248218500a1a9302f04404812c050839600062c801e185c400b08f480208'
}, {
  a: '0x12349f53430c97a9d8a947d2a2bfcdb28b5eb638961738644e94666e03bd',
  b: '0xbf70a605fbf82297b19e1a8d92b2b0fce055bf72f14b11a5',
  r: '0x9720800143d0229781920a0c9230901420440e10604a01a5'
}, {
  a: '0x1dd12c75230b468efaed72fe78e27af34dbfe31',
  b: '0x93a330660a80ad3cffb9b849ff089e9c5ab00e21673a9f50032d02cc9252d5775ee3a',
  r: '0x1c5020042103028e50012002488252d1451ee30'
}, {
  a: '0x4efa4b7d155142e5ff5b5973d309d1179072bbc2fb19bf86613195894bb4e4fcde1d94',
  b: '0x1cab7de1b73157f8c003929dfcba966fd0548ceb563e586e8dff225dcb40dd5c',
  r: '0x1c015140a5315358400300911490122bc05008ab06201004894b2044c8401d14'
}, {
  a: '0xc87428049aaf23814b56852bca28107e85f2',
  b: '-0x19c60e895b6b467fd6f56fffd440cd1d6a8fe5c0701ba8d',
  r: '0x4810000088000281430601030020107e0572'
}, {
  a: '0xc6a8b3829ee127252c90a59892c9d42e1e862d841e80fe83b3f2a582c80ebfe4',
  b: '0xc8602c9e24f4cf46faf66598a8059c45aee560fe2',
  r: '0x88200c0220e0424040e00588280508402c8060fe0'
}, {
  a: '0xd77c980dd78563dc45a3911ceafc7900e16e',
  b: '0xafd71c223829bb40349a5a8e3846a09538086ded10a3a65b8b6',
  r: '0x3488008c38462084180801cc0083800a026'
}, {
  a: '-0x19c0168912baa38e012bb615a6e14a1377edae83',
  b: '0x119a9edd1e7982eacc9cb5e24798db902f4e70',
  r: '0x118816cd045800eac408a0400690c880024070'
}, {
  a: '-0x82800d821eca3c86695e9ed71f0800adbeec0f16ea9a0758a6d66a1307',
  b: '0x8c606816a285f8a68565ebdc95a71f3b56fd019be356e10049bc',
  r: '0xc6020022084a0200060e3dc1001133040150198a350210048b8'
}, {
  a: '0xf76105a31b95191bf4981336c6f4fbf89b67f9099e661afc6',
  b: '0x2123a8028115d478099deeec8a5b696dd248c2b61b',
  r: '0x2121000081018030080d4eac88126900904040a602'
}, {
  a: '-0x697ae1388aa9e3c01fdaeb8fb15ba88b81df4d9869b6604e2d128850720e1702f71',
  b: '0xa54385fea3912e1878c9867548ae8ad9999e93defdc5c22523e863',
  r: '0x8142005003002a007041820100280099991c02d678c0c20403c003'
}, {
  a: '-0xf5f809722b1e782d99305d4841e2587b7a8f913c7e9ef14c16a01f10d222bcd384191',
  b: '-0x8c0f506b33c78a28f3a7c96e58c6be7b755091ffd8',
  r: '-0xf5f809722b1e782d99305d4841ead8ff7ebfbd7cfe9ffb7c96e59f7bf7b7fddb9ffd8'
}, {
  a: '0x45a47db21272a8f346d4c1911c4266071ee0831d5',
  b: '-0xbb9555981d6113588f3ffe20c180e61f5d6db81ddc6b2f1c3a97c322cf756bcbcff9b',
  r: '0x1a020920262209040c0c1001c402002142000045'
}, {
  a: '0xfa1fa71d1b9a342702fb8b6d521c18599fa5dc01d6',
  b: '0x171fef54f2503b5936dc2be1697b39ada676329d890a73cfcac61b36',
  r: '0x581684090108302100a20220100808518f80c40116'
}, {
  a: '-0x7790830312e3dae195079971a7acf21a94b8ece',
  b: '-0xe0d2ba61fb44f829e6704d562fd74fee2263f5f48ce55df604',
  r: '-0xe0d2ba61fb47f929f6716f7fafdf5fffb77bffffaded5ffed0'
}, {
  a: '0x247ce9bb6657c977a07157bcbf126efd53aea3892e30eae3f202ab9014034aefa',
  b: '-0x50f31905a2fd53e6150bf0b1a2ff8cc305b580381ea8e04bc8116d2f18f1a34ebb1',
  r: '0x464e81902040962a001461c00122cf8422e83810610a023e202808004000044a'
}, {
  a: '0x927ed9ac3433ae57dc4ec83b7f8e5183cba66fa82014e0b12f',
  b: '-0xe79abe4b8a89edac88e1b7ab9e7b5507b5229b93712b910d91',
  r: '0x106441a434320253540e4810618400804a846428001460b02f'
}, {
  a: '0xe57eb2cd0027d8aced016b092318f8e62a8cd815eb41',
  b: '-0x577fb941eff7b6a7625bae54959ff128c68147e0',
  r: '0xe57ea0800026100849000900010868600a841814a800'
}, {
  a: '0x14bcc16ce13709ad561cea83b853aef4bd14dcf2a93abe801c92f09a99c8911',
  b: '-0xa58c8c8a27e8dee8821fdbaaadee7f550749eeb4879ff',
  r: '0x14bcc16ce13709ad56186203305006201514c020011210800890b0100948001'
}, {
  a: '0x1d39e723d53d9af2c3591eca000975412372a69f5c173a86adb9a498cfb8839d65f70',
  b: '-0xd4cf871d44c6e5a41561a0ad547764ae984daa22cf45bec9b96fc209893e',
  r: '0x1d39e723d0310282031110800009654122308095141320048109a4104428039d65640'
}, {
  a: '0x199859e38f44367957bb00e796d0c0138b1ea679436969fa22b73458c49bae0d06d4',
  b: '-0x8a8a9bf0bd73d3f097d00d8399c114d52b5e6abdf755b2ec419b85f8b',
  r: '0x199859e38f44165040b000c280d08013030622680229481800200000c01ba6050054'
}, {
  a: '0xb1a694defe38c938df217c4b9655218ecb42dbae60d2bb48ee5b9e2a472c471',
  b: '-0x66811146478bd66a0b5bc45f926ea7e0273ee6a0f162c8a3c5',
  r: '0xb1a694defe38c910ce2118030211010a430202880080b908001190284324431'
}, {
  a: '-0xce697db83992e407f98be250c82178da4b0116688692c176a6221759405412fc4a',
  b: '0xce933006d4d6762fc0b52b7a035c67edf069a1d25099f6b4f1b36b7d8dd01578d5',
  r: '0x920006c44412280034092a035c0725b068a19250093680519168248d80050094'
}, {
  a: '0x27c76902fb2c35cd1e93b3eca21102a48391385a7d398257eac514c',
  b: '0xad7c9d016f88f603314ea3eced53b2b12f249621dc398e17396f140',
  r: '0x254409006b0834011002a3eca01102a0030010005c3982172845140'
}, {
  a: '-0x417b0e611ec89dc684553cb6debbbcfc3591b6dafdd361d069cc761e1e53ccf06287',
  b: '0x8415590d293a983ea035d7c39bed5d0731c7a3880834f2faa94a578afac82b324cac2',
  r: '0x800049092812102280308400920444003086a0800020c0e2a942108a1a08033048840'
}, {
  a: '0xd0a9ac8bf2d421f5b35fc11ad676ffe088c706e7318b1a7db9e5768418',
  b: '0x7a26eb68bd4bb37777b21aadd792b0db8e011c2337d76c',
  r: '0x2024a348810a927677a008850682308b0a011821368408'
}, {
  a: '0x5fd60751f4efaba3851369187c381db1af0e2c83d2aed6133f9e0d97075202bab',
  b: '0x412083c9f4510782ef7ab5ef88bc05373356e62f2de',
  r: '0x200009b00106008352a4c6003c04051306420228a'
}, {
  a: '-0xb0ba0e4d6a7788687ec9f954dd8576506a49b',
  b: '-0x4017236a13af5743a17aba5e5a8e225313d',
  r: '-0xb0fa1f6f6a77af7f7fe9fbfedfdffe727b5bf'
}, {
  a: '0xcd30dcc821155c0ebb1cf2c97c2b72d93ade86d84db206',
  b: '-0xe5fc8f64bae57df04d94a691347b09d6510d2e4cea7e85a4eeec045b8261a4bae',
  r: '0x8510cc880100180e29183048142130113a9a06d845b002'
}, {
  a: '0xd4633056898bce295ff2ad4f9fc3fb5e294c06bcd942f7abcd3625',
  b: '-0x94a8f4aff414f5c4857e7d927ce5e57205a499e3e443ae725d28e26eb2db40c75',
  r: '0x902330000802c82101a08d059641c11a0108022c51401482493201'
}, {
  a: '-0x5605b7098076831fd88a9db6428fb02baf6e5d9c47da66da5bf',
  b: '0x221e096e72bfbf337b61799f4b1442f35d64e8c90deae2229',
  r: '0x2208006e003ca0237160499d4004405011206088058820201'
}, {
  a: '0x5bfcb7e5ca4d342bb295ccb2e9606adc4606ab2f658d01',
  b: '0xb4e91eb70a9a6a3b31bb22e041b20967d30758f7de1fe21f9628ed133',
  r: '0x2a0b301820c040b20944c30610068c04600a922048101'
}, {
  a: '-0xe0b57b1f60ce6794c73b22bb34ef64df1ab86',
  b: '-0x482b5c78fbbdc7608fec087a281dce1cc652f7272',
  r: '-0x482bfcfdfbbfe7eeeffccf7b2abffeffe6dfffbf6'
}, {
  a: '-0x5d7263ea0642d9718f4c89da03bb073ba34df6e8938a3125cbebf995c40',
  b: '-0xb1f9ade53b082bff7ff6c197799aa2dc51a740e3822b8f6c6c6cecd0e',
  r: '-0x5df3fbefe77bd97bff7fffdb97fb9fbbff5df7e8f38a3bafefeffdfdd40'
}, {
  a: '-0x522efa2b2d62cfa01d8e42df87740c9e72715ae49d2bc90624e',
  b: '-0x6429cc403c608483442d308382b3e29c54879219c1edc2367fe5651',
  r: '-0x6429de6efe6bade3cfad3d8fc2ffe7fc5c9ff279dbeddf3fffe765e'
}, {
  a: '0xd8b059dd07c33c96c2a5edc791413d7c5973328b450e2518b4badca3635357a492c1',
  b: '0x64214df2ca1ec4e4f3db1fc721682488bf81b07a021ec79e5acf1554f2e566b55866',
  r: '0x402049d002020484c2810dc7014024081901300a000e0518108a1400624146a41040'
}, {
  a: '-0xdf4a44083aeb0344a97b299817ee74da482e0',
  b: '0xcb8bdb27df5a36c5ab98871923311a8f4e962e5ecd9af7362a6dc48c1ccea4',
  r: '0xcb8bdb27df5a36c5ab98871922011a8f4c100e4a850845262a010080184c20'
}, {
  a: '0xb3a8411746691e84c944316c4d9a8c4bac3e66e15d501a345dee7d4ee',
  b: '0xce3ffc78cc0b7cc37338b4245d6513264a232e23d645',
  r: '0xc80c944004005880403880244c05110002010e23d444'
}, {
  a: '0xff8dd870b5ed52175d85832ea63800499b0ccdfb1',
  b: '-0x38f7745891578d1b6655465d3ccdb65f12bd0674b8b8640bff',
  r: '0xea85084090a912041104820e8428000010088d401'
}, {
  a: '0x372333d90faecb4e39e5898b5637ecdb501276b1c965',
  b: '0x12551158657be2a1bbc49106277f7940d1bf4c664b',
  r: '0x2111108244b4221a1808106276c59401036004041'
}, {
  a: '0xb8186dca8cf0f79f6422d8c8d4e2a30c6db8bf44b074c0e9',
  b: '0x66ddbd927326c56f9c85bc3b05353e422e1a7c571daa37b798d25e',
  r: '0x901024c00c90859c200010084022020c4518aa04b010c048'
}, {
  a: '-0x13f0f22b0bf6b820cec524c43b82491adca23ee1cda8bec0661d5539ce8f1b2ec80e',
  b: '0x3da1d26be805fdea30cc6d8984d0f398b5498700d343da71565',
  r: '0x11a1922840016c4230cc0181045013989408840013024811560'
}, {
  a: '-0x7958dae6fa8f3f9fae955c4a784eda415e930c59bc0a4ae5d4e5f2f2',
  b: '0xf9de929af0884fc555d7ffcc579aabeede9085c43d96a08302543',
  r: '0x705090120000050400135848121aaa06ce1004041910a08100502'
}, {
  a: '-0x9f342d5b5b8bc9e9311be819604b88d5664ba496',
  b: '-0xc2402a1e368e43620826827c6b699680cb62a031a6270eef3775556a03ba8a6f712661',
  r: '-0xc2402a1e368e43620826827c6b69969fff6ffb7bafefefff3ffd5d6a4bbadf6f7ba6f6'
}, {
  a: '0x272b60858ea41afd706f2c410cd8d1c3507fdf300dfbddfd',
  b: '0x24aa5fbf61fe8ac6b88acaa3104b2fb816acf0c2d8e725c',
  r: '0x20a2081860408ac60082c00000090c3006acf000d8a505c'
}, {
  a: '0x245981c1f49bcce5e3c6cb46be009de07a9096cfd7014b2fa98f',
  b: '0xf6cc8be9220bdb9006209bd63499e9763e382d84c05ccfd1a09faf99c0128',
  r: '0x2019810060098c6141868342a20098400080940a0100490c0108'
}, {
  a: '-0xdd2ee47731e73ae7b8d78eb1e2d315fca5d8f8b49478c1',
  b: '0x5921d089d955034dbb597c2d3a76967570b179a36d6768d26a1dfd63786b7e6ed8e5db',
  r: '0x5921d089d955034dbb597c2d225012004010410045206042080ce8035823064a48851b'
}, {
  a: '0xa792c939b41120f27c21d140207f60406cd148c14c9fdacb401',
  b: '-0xcbfa8d18c69db9c1492a5048b6e30ea8c6e0a2a4063f2',
  r: '0xa792c9300410203060001000002f20400cd140010c1d5ac9400'
}];

const dataSmall = [{
  a: '-0xdcae8558a',
  b: '0xd9433c5',
  r: '0x5142244'
}, {
  a: '0x3f8',
  b: '0x78da32367',
  r: '0x360'
}, {
  a: '-0xf5da1a486',
  b: '-0xd8cd7a9f9',
  r: '-0xfddf7adfe'
}, {
  a: '-0xa0ce073cf769',
  b: '0xe641193cd9925aa5',
  r: '0xe6411930d8820885'
}, {
  a: '-0x751de9316985ac',
  b: '0x1997706e3dd620',
  r: '0x882104e145200'
}, {
  a: '0xec05f272',
  b: '0x6e7cf',
  r: '0x4e242'
}, {
  a: '0x856e1a3c',
  b: '0x10593d494d',
  r: '0x12c080c'
}, {
  a: '-0xe3172c315ba3b',
  b: '-0xfc6',
  r: '-0xe3172c315c000'
}, {
  a: '-0x5743',
  b: '-0xbc3c',
  r: '-0xff7c'
}, {
  a: '0xad56cd6890',
  b: '-0x43332511d1',
  r: '0xac44c86800'
}, {
  a: '-0x7053d5',
  b: '0x6370ec9057',
  r: '0x63708c8003'
}, {
  a: '0x3fc733459',
  b: '0x3f',
  r: '0x19'
}, {
  a: '-0x84afe2b',
  b: '0xac',
  r: '0x84'
}, {
  a: '0xbe36313bfe',
  b: '-0x6cd76a1e25',
  r: '0x92201121da'
}, {
  a: '-0x8ae3062ce738',
  b: '0xae27e',
  r: '0x20048'
}, {
  a: '0x1e91fcc4aba712',
  b: '0xf8ad9e2',
  r: '0x48a8102'
}, {
  a: '-0x65',
  b: '-0xa88b88d889b8e',
  r: '-0xa88b88d889bee'
}, {
  a: '-0xabce38d2a1d94',
  b: '0x0',
  r: '0x0'
}, {
  a: '0x71710d50f4f6',
  b: '0x920b47',
  r: '0x100046'
}, {
  a: '-0xa5bd9d',
  b: '0xc197554a32',
  r: '0xc197504222'
}, {
  a: '-0xe841c6f8f4f',
  b: '0xac',
  r: '0xa0'
}, {
  a: '-0x82c15bd108664779',
  b: '0x2',
  r: '0x2'
}, {
  a: '-0xb561a7b3ed',
  b: '-0x4f93640f5078d4dd',
  r: '-0x4f9364bf71fff7fd'
}, {
  a: '0xbc54166a81c6be9',
  b: '0x192de5d4d',
  r: '0x801c4949'
}, {
  a: '-0x94b5',
  b: '0x0',
  r: '0x0'
}, {
  a: '-0x63f92',
  b: '0xb7cacd5fad4542',
  r: '0xb7cacd5fa94042'
}, {
  a: '0x1b7034b8a42e8a',
  b: '0xd44b',
  r: '0x40a'
}, {
  a: '-0x95fa36c23011',
  b: '-0x56030e11b32724f',
  r: '-0x560b5fb3ff2725f'
}, {
  a: '-0x51fbb',
  b: '0xdd2f4d402934ec',
  r: '0xdd2f4d40282044'
}, {
  a: '0x24c1cc',
  b: '0x0',
  r: '0x0'
}, {
  a: '-0x793300',
  b: '0x4369d554ea86c880',
  r: '0x4369d554ea86c800'
}, {
  a: '0x63eb289f8c57f',
  b: '0x5707598e4243a8',
  r: '0x6061088404128'
}, {
  a: '-0x7ba8466',
  b: '0x742',
  r: '0x302'
}, {
  a: '-0x539e5f8',
  b: '0x39914003b8966b',
  r: '0x39914002801208'
}, {
  a: '-0x9b218941c',
  b: '0x1251c1d1',
  r: '0x4141c0'
}, {
  a: '-0xe8d0b1c72bffd',
  b: '-0xe6556a82e',
  r: '-0xe8d0f7d76bffe'
}, {
  a: '0x9900feb973089fd',
  b: '-0x2d04e5e5cd87a',
  r: '0x9900fa181200184'
}, {
  a: '0xae916b7d375aa54a',
  b: '-0x4',
  r: '0xae916b7d375aa548'
}, {
  a: '-0xc12f843',
  b: '0xabf665dbbe',
  r: '0xabf26503bc'
}, {
  a: '-0x6222335e6',
  b: '0x1e44e',
  r: '0xc00a'
}, {
  a: '0x3d372599',
  b: '-0xee',
  r: '0x3d372510'
}, {
  a: '-0xcca5ec0',
  b: '-0x4b162ee',
  r: '-0xcfb7f00'
}, {
  a: '-0xe8',
  b: '0x82d74',
  r: '0x82d10'
}, {
  a: '0xa3773d3',
  b: '0x0',
  r: '0x0'
}, {
  a: '0x5ee1d4dada02',
  b: '-0x299dd3e4d68',
  r: '0x5c6000c09200'
}, {
  a: '-0x8b8f0a407',
  b: '-0x25',
  r: '-0x8b8f0a427'
}, {
  a: '-0xbf85f37e041',
  b: '0x53aea44945f',
  r: '0x402a040141f'
}, {
  a: '-0x4',
  b: '0x67f47ed',
  r: '0x67f47ec'
}, {
  a: '-0x9137a',
  b: '0x41c8',
  r: '0x4080'
}, {
  a: '-0x5',
  b: '-0x871',
  r: '-0x875'
}, {
  a: '-0x3f25e4',
  b: '-0xa0531e413be7',
  r: '-0xa0531e7f3fe8'
}, {
  a: '-0x19be991d153',
  b: '0x0',
  r: '0x0'
}, {
  a: '0x3f2fe7ef47d5',
  b: '-0xe18cc294fb',
  r: '0x3f0e632d4305'
}, {
  a: '-0xad7139e2fc6',
  b: '0x709c0fa71ca1',
  r: '0x70080c211020'
}, {
  a: '0x33827fd151c5e',
  b: '-0xdeb06c4789dc7c',
  r: '0x10803b8140004'
}, {
  a: '0xf2f35c222',
  b: '0x9',
  r: '0x0'
}, {
  a: '0x1d0',
  b: '0x6f40b4d',
  r: '0x140'
}, {
  a: '-0x21f83db',
  b: '-0xc6fb634e',
  r: '-0xc6ffe3e0'
}, {
  a: '-0x75ab1954',
  b: '-0xe3ffe0a9952f5af',
  r: '-0xe3ffe0afdfbfe00'
}, {
  a: '0xf49261d2',
  b: '-0x88ba5e9ca6f8347',
  r: '0x34906090'
}, {
  a: '0x3f887c685fab4',
  b: '0x89e20890',
  r: '0x80800890'
}, {
  a: '0x7c3917ccbaf',
  b: '0x4f4035449',
  r: '0x90004009'
}, {
  a: '-0x962e6',
  b: '-0x6a1ba5bf16',
  r: '-0x6a1badfff6'
}, {
  a: '-0xa6',
  b: '-0xa6bcc18e757',
  r: '-0xa6bcc18e7f8'
}, {
  a: '0x74c0e5724de2',
  b: '-0x7f',
  r: '0x74c0e5724d80'
}, {
  a: '-0x25c5d54f3bbd4',
  b: '-0x6992d6d9c91a459',
  r: '-0x69b7d7ddcf3bfdc'
}, {
  a: '-0x13251489beffbd2',
  b: '-0xa1f',
  r: '-0x13251489beffbe0'
}, {
  a: '0xc6d8493cf',
  b: '0x268cdc1',
  r: '0x81c1'
}, {
  a: '-0x1a33fb9ad457',
  b: '0x0',
  r: '0x0'
}, {
  a: '0xc65f0834827',
  b: '-0x3cd0660d6601e',
  r: '0x6190010822'
}, {
  a: '-0xf2ffe0f0',
  b: '-0x9395027ffb',
  r: '-0x93f8000000'
}, {
  a: '-0x87377a1',
  b: '0xd81619cde',
  r: '0xd8100885e'
}, {
  a: '-0x94809c',
  b: '-0x84e776ee63a',
  r: '-0x84e77fee6bc'
}, {
  a: '0xc1c91d40ae8cdf6f',
  b: '0xa293',
  r: '0x8203'
}, {
  a: '-0x8cb5092',
  b: '-0x27f2380c545610c1',
  r: '-0x27f2380c5cdf50d2'
}, {
  a: '-0x5',
  b: '0x6e61edeb',
  r: '0x6e61edeb'
}, {
  a: '0xd94e2a925c48',
  b: '0x91b06457435027b',
  r: '0x4420100048'
}, {
  a: '-0x1db2a8b',
  b: '0x0',
  r: '0x0'
}, {
  a: '0x1c7455f2f6a',
  b: '-0x5f74f3',
  r: '0x1c745000b08'
}, {
  a: '-0xad0c',
  b: '0xf6d6152575d5575',
  r: '0xf6d6152575d5074'
}, {
  a: '0x928',
  b: '0x59246f20c',
  r: '0x8'
}, {
  a: '0xdc0f5d',
  b: '-0xd8',
  r: '0xdc0f08'
}, {
  a: '-0xb0e09f2d37f5d',
  b: '-0x5d148c0cb6f0daaf',
  r: '-0x5d1f8e0df6f3ffff'
}, {
  a: '0x64b3353d23',
  b: '0x77d6023b55a6baa',
  r: '0x20b1102922'
}, {
  a: '-0xf85193f106',
  b: '0x37716f486c28bfc7',
  r: '0x37716f002c280ec2'
}, {
  a: '0x7e126a',
  b: '-0x7139af41',
  r: '0x46102a'
}, {
  a: '0xd28f2a1337b1',
  b: '-0x1ddc5274',
  r: '0xd28f22032580'
}, {
  a: '-0xe58c4e',
  b: '-0xe00fe1',
  r: '-0xe58fee'
}, {
  a: '0x57898d8591',
  b: '-0x52e',
  r: '0x57898d8090'
}, {
  a: '0x5fdb2a4cf1cf',
  b: '0xd87b40',
  r: '0x487140'
}, {
  a: '0x114b100f383',
  b: '0xf5e6a56e759',
  r: '0x1142000e301'
}, {
  a: '-0x66d',
  b: '0xd727',
  r: '0xd103'
}, {
  a: '0x6b5c18d7398c',
  b: '0x7cc6d0f',
  r: '0xc4290c'
}, {
  a: '0xfacc6f',
  b: '-0xc6',
  r: '0xfacc2a'
}, {
  a: '-0xb3edc57abccb058',
  b: '0x0',
  r: '0x0'
}, {
  a: '-0x92b615e9d7',
  b: '0x2aa6a',
  r: '0x20228'
}, {
  a: '-0xcef6443cc',
  b: '0x1e8559ec29789c4f',
  r: '0x1e8559e000189c04'
}, {
  a: '-0xc8d6dd328ad8004',
  b: '-0xd',
  r: '-0xc8d6dd328ad8010'
}, {
  a: '0xde',
  b: '0xb16cd26d5427c23f',
  r: '0x1e'
}, {
  a: '-0x8',
  b: '0x68a',
  r: '0x688'
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
    const r = d.a & d.b;
    if (d.r !== r) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: &');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a & d.b;
    }
  }
  return Date.now() - t1;
}


function testJsb(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = JSBI.bitwiseAnd(d.a, d.b);
    if (!JSBI.equal(r, d.r)) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: bitwiseAnd');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = JSBI.bitwiseAnd(d.a, d.b);
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
