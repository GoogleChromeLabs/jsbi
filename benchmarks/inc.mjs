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
  a: '0x1541453bf44194ead9150368ff878e76c2fa429d118bc77b11b882edfbbb3e36c',
  r: '0x1541453bf44194ead9150368ff878e76c2fa429d118bc77b11b882edfbbb3e36d'
}, {
  a: '-0x7df0da91e1648c1c548d0c0b7856ec864fb29e670b73456956ce3161fc247e7e',
  r: '-0x7df0da91e1648c1c548d0c0b7856ec864fb29e670b73456956ce3161fc247e7d'
}, {
  a: '0x7f246b7592506f1df887ce2e9aeb1f94d2e053dac4',
  r: '0x7f246b7592506f1df887ce2e9aeb1f94d2e053dac5'
}, {
  a: '0x80e03e8fad6148ee1d548f1aeb229018fe0a15f8505b2fe2d3b408ba6aa99bb5e',
  r: '0x80e03e8fad6148ee1d548f1aeb229018fe0a15f8505b2fe2d3b408ba6aa99bb5f'
}, {
  a: '-0xeaa28c983224b9c2f3a81da9529a36f50325',
  r: '-0xeaa28c983224b9c2f3a81da9529a36f50324'
}, {
  a: '0x49e43bc74e2be3af592c27a2e59d9cfb9ce725fbec2dbe77',
  r: '0x49e43bc74e2be3af592c27a2e59d9cfb9ce725fbec2dbe78'
}, {
  a: '-0xaed171cea1e864bd122b3d0fe30c8fdf158a62dd3960',
  r: '-0xaed171cea1e864bd122b3d0fe30c8fdf158a62dd395f'
}, {
  a: '0x80837634bc57c3669ee6316bb376e845fcac821d44904576de592293a24410fe52d242',
  r: '0x80837634bc57c3669ee6316bb376e845fcac821d44904576de592293a24410fe52d243'
}, {
  a: '0xa29010ed6cee8ec07b0358193e2c407218ed34d61492da6ec4ec252510585f',
  r: '0xa29010ed6cee8ec07b0358193e2c407218ed34d61492da6ec4ec2525105860'
}, {
  a: '0x9f2913a2a3578c35148dd8ccfccf4fe4e1d25b2d663750bedfafa',
  r: '0x9f2913a2a3578c35148dd8ccfccf4fe4e1d25b2d663750bedfafb'
}, {
  a: '0xf7204f2d40e6e7ea93e9624785500b86b5ea',
  r: '0xf7204f2d40e6e7ea93e9624785500b86b5eb'
}, {
  a: '-0xd1d9d16b2ae7a7a0cef5b4ceada246c42dbaddbaf4d69317f9b4cc9d60abbe5cb859',
  r: '-0xd1d9d16b2ae7a7a0cef5b4ceada246c42dbaddbaf4d69317f9b4cc9d60abbe5cb858'
}, {
  a: '-0x4a7d345a01e40e4254afd390bdda949501f9f3',
  r: '-0x4a7d345a01e40e4254afd390bdda949501f9f2'
}, {
  a: '0xb0999809379ab780fef100fed4937783183bb9a8f6044a1198b6',
  r: '0xb0999809379ab780fef100fed4937783183bb9a8f6044a1198b7'
}, {
  a: '0xb7d03e4b99eb6e555a729eb6cb3fc90f8eb89b264f82d4ff0',
  r: '0xb7d03e4b99eb6e555a729eb6cb3fc90f8eb89b264f82d4ff1'
}, {
  a: '-0x6349478e505576ab749ce5afc2f44f0f4509423b4e32ab77ce8ab152615dc7f45',
  r: '-0x6349478e505576ab749ce5afc2f44f0f4509423b4e32ab77ce8ab152615dc7f44'
}, {
  a: '-0x8c930ba880e125065dc1868908f8296690fdfa0c94d0d3fe838a954304d',
  r: '-0x8c930ba880e125065dc1868908f8296690fdfa0c94d0d3fe838a954304c'
}, {
  a: '0xd4062dab1d4dc61b65fbba26e333ae7e517c958c4f7995268031b6e494',
  r: '0xd4062dab1d4dc61b65fbba26e333ae7e517c958c4f7995268031b6e495'
}, {
  a: '-0xf1b5b1d7e90bfd5aeeeba4fd2cfd7643c599a0445fed635e68f9f',
  r: '-0xf1b5b1d7e90bfd5aeeeba4fd2cfd7643c599a0445fed635e68f9e'
}, {
  a: '-0xb3597af7c337de04f63067d42a1600f8ff4ffa0df221fc9',
  r: '-0xb3597af7c337de04f63067d42a1600f8ff4ffa0df221fc8'
}, {
  a: '0xd6b8118d97259f9406ebfb9b7bddfb64c3e9aee5a2cf4a7daca3c2a84b01c7ff9d',
  r: '0xd6b8118d97259f9406ebfb9b7bddfb64c3e9aee5a2cf4a7daca3c2a84b01c7ff9e'
}, {
  a: '-0xd2e77e9d9af5d50aec03d4222a93dd80158545',
  r: '-0xd2e77e9d9af5d50aec03d4222a93dd80158544'
}, {
  a: '-0x71c5cf4cf25aebe199025845b52ed855151040a106b6511f9487471',
  r: '-0x71c5cf4cf25aebe199025845b52ed855151040a106b6511f9487470'
}, {
  a: '0x389218ed526df725b079cc182faa87e180c9e41d6a7cb2266ce78',
  r: '0x389218ed526df725b079cc182faa87e180c9e41d6a7cb2266ce79'
}, {
  a: '-0x6281e49ef63f2746b2c17a58aab88215f52067',
  r: '-0x6281e49ef63f2746b2c17a58aab88215f52066'
}, {
  a: '-0xbc032408d94aa730c713a27058d28bb8ddfe919dbf89438fdc33c53228b',
  r: '-0xbc032408d94aa730c713a27058d28bb8ddfe919dbf89438fdc33c53228a'
}, {
  a: '-0xb2dea61b76fe423bf4246be2be113aa04ed31d432140ea9944596fb674c',
  r: '-0xb2dea61b76fe423bf4246be2be113aa04ed31d432140ea9944596fb674b'
}, {
  a: '0xdd6ce9e058c367714d4785b41ae66b84c948cc28',
  r: '0xdd6ce9e058c367714d4785b41ae66b84c948cc29'
}, {
  a: '0x7ff4f597ea48631ff2ae68a5e96d3eb6e499fd626b502548753380651235',
  r: '0x7ff4f597ea48631ff2ae68a5e96d3eb6e499fd626b502548753380651236'
}, {
  a: '0x58942bf6c594cbbe6fe785161183b19fba54f1c2169e8ca4cf598575a2eec146',
  r: '0x58942bf6c594cbbe6fe785161183b19fba54f1c2169e8ca4cf598575a2eec147'
}, {
  a: '-0x340e9dda24533350fa71c9fbef7db966ee4ce01ec13ea',
  r: '-0x340e9dda24533350fa71c9fbef7db966ee4ce01ec13e9'
}, {
  a: '-0x59e4069b21d7cc8340f770fee52e416f79c7121864',
  r: '-0x59e4069b21d7cc8340f770fee52e416f79c7121863'
}, {
  a: '-0x79736d8e772f96ebb3e5ff6bd102325cd3436108e',
  r: '-0x79736d8e772f96ebb3e5ff6bd102325cd3436108d'
}, {
  a: '0xb6e2c848f739ebcb931128c10997d3ed2720d768ce9a55181f8390be32d5d85',
  r: '0xb6e2c848f739ebcb931128c10997d3ed2720d768ce9a55181f8390be32d5d86'
}, {
  a: '0x79fa964543ca0a333e32c0f382e7079ff473b0712675bb9fe420ca4ede79c',
  r: '0x79fa964543ca0a333e32c0f382e7079ff473b0712675bb9fe420ca4ede79d'
}, {
  a: '0xf747a2676f80dff798d1d0a101b6c8c7bffccbaed8ca5dc13fbe39c3b1',
  r: '0xf747a2676f80dff798d1d0a101b6c8c7bffccbaed8ca5dc13fbe39c3b2'
}, {
  a: '0xaad11cf695662f1f9f83465a8d2e9cc2a3848c',
  r: '0xaad11cf695662f1f9f83465a8d2e9cc2a3848d'
}, {
  a: '0x293c938b2f00b56dcc7ed43d86ab9501d46',
  r: '0x293c938b2f00b56dcc7ed43d86ab9501d47'
}, {
  a: '-0x9434f9f5e4a452e6311fd05ac93badfb91735d519b0a5b6b45242026b',
  r: '-0x9434f9f5e4a452e6311fd05ac93badfb91735d519b0a5b6b45242026a'
}, {
  a: '-0xc29733bf2986ff4882f7e0d6dd8f568e59bb25b224e460d5da347e1e',
  r: '-0xc29733bf2986ff4882f7e0d6dd8f568e59bb25b224e460d5da347e1d'
}, {
  a: '-0xf1647dfc94e2dd2aea858df28fba9f4846988',
  r: '-0xf1647dfc94e2dd2aea858df28fba9f4846987'
}, {
  a: '0x20624cbf45c60c24771d0da26ae4f8ce4e6489b39091a8ef16e09333a81f79',
  r: '0x20624cbf45c60c24771d0da26ae4f8ce4e6489b39091a8ef16e09333a81f7a'
}, {
  a: '-0x5ce4c0e98097ac706565e2aaad52b49b8d9f3cf8c6d',
  r: '-0x5ce4c0e98097ac706565e2aaad52b49b8d9f3cf8c6c'
}, {
  a: '0xa54c8a685f074539393a87450ba9296ef99ee78002c78795c4bf279dc8c187',
  r: '0xa54c8a685f074539393a87450ba9296ef99ee78002c78795c4bf279dc8c188'
}, {
  a: '0x1570123b6c06a407af6e0c59931065377d406e701742ff2',
  r: '0x1570123b6c06a407af6e0c59931065377d406e701742ff3'
}, {
  a: '-0xb7038f2c6843d5bf0ae1208d178329b28f4130f9502',
  r: '-0xb7038f2c6843d5bf0ae1208d178329b28f4130f9501'
}, {
  a: '0xb434ccd587e55d5b5fdb65ec9872a31296801adb5a0574fe664dddd',
  r: '0xb434ccd587e55d5b5fdb65ec9872a31296801adb5a0574fe664ddde'
}, {
  a: '-0x25e0bec380bf974f2565a7f1a7d3e4f3a443e',
  r: '-0x25e0bec380bf974f2565a7f1a7d3e4f3a443d'
}, {
  a: '0x9f9e881d99cbf2531e8f12db9034082992774f34411cbcb3d6657d2e830ecba8',
  r: '0x9f9e881d99cbf2531e8f12db9034082992774f34411cbcb3d6657d2e830ecba9'
}, {
  a: '0x7abbb0aca4a360d162ef77662456b1310085671a4efe604bbe7',
  r: '0x7abbb0aca4a360d162ef77662456b1310085671a4efe604bbe8'
}, {
  a: '0x9863361ed60264892c9bf10b81de285cdf23cba47d7c',
  r: '0x9863361ed60264892c9bf10b81de285cdf23cba47d7d'
}, {
  a: '-0x2939bc84509b806776418a6a53fe14b45c881c158efad5',
  r: '-0x2939bc84509b806776418a6a53fe14b45c881c158efad4'
}, {
  a: '0x72fa5730d64d405d3aa5e122df4c8bf809b5f32c3c75fd7d65420d2dd63453198e',
  r: '0x72fa5730d64d405d3aa5e122df4c8bf809b5f32c3c75fd7d65420d2dd63453198f'
}, {
  a: '-0x21c64272e0c6078af71df7398001331d15979afeeb177e24642dc2eb88b',
  r: '-0x21c64272e0c6078af71df7398001331d15979afeeb177e24642dc2eb88a'
}, {
  a: '-0xc03ff096121ded4ae7efd13f662259608f2d76b5717300919ed65aee',
  r: '-0xc03ff096121ded4ae7efd13f662259608f2d76b5717300919ed65aed'
}, {
  a: '-0x7e01c04e11cecbbf9e0e58353f3a403ddf658a9b7ac840292',
  r: '-0x7e01c04e11cecbbf9e0e58353f3a403ddf658a9b7ac840291'
}, {
  a: '0x9342a11eb937c1134ca21719c3cc6e9b55545934c27833c86dc944',
  r: '0x9342a11eb937c1134ca21719c3cc6e9b55545934c27833c86dc945'
}, {
  a: '-0x1d1125e8ce24cd34e7c7d729e519c771146b0ce39a4ecd7ae675b1c2a9a',
  r: '-0x1d1125e8ce24cd34e7c7d729e519c771146b0ce39a4ecd7ae675b1c2a99'
}, {
  a: '0x95cb5ce709aca6d599725e83bb91bec7f081931aa51a3c9e6',
  r: '0x95cb5ce709aca6d599725e83bb91bec7f081931aa51a3c9e7'
}, {
  a: '-0x78e5eea62c2ae917a61d50a570f81888e9ad5ad80264cd823a25c6bdc122dfea11d64d',
  r: '-0x78e5eea62c2ae917a61d50a570f81888e9ad5ad80264cd823a25c6bdc122dfea11d64c'
}, {
  a: '0x25bea68aee535032c0c3f6e7011f3d5ec8c96',
  r: '0x25bea68aee535032c0c3f6e7011f3d5ec8c97'
}, {
  a: '0xbe4ad9c5996ca385762e53992a3991f0da4f9ab56b27cc8784feae5438997',
  r: '0xbe4ad9c5996ca385762e53992a3991f0da4f9ab56b27cc8784feae5438998'
}, {
  a: '-0xa3ad79edfcdfe3c04a79b4508f578305e64b78996bfdf1cf895ce42f',
  r: '-0xa3ad79edfcdfe3c04a79b4508f578305e64b78996bfdf1cf895ce42e'
}, {
  a: '-0x5e59f8b4bb59a1ad524f40e95afe4e0e4001fb01d9a',
  r: '-0x5e59f8b4bb59a1ad524f40e95afe4e0e4001fb01d99'
}, {
  a: '-0x53f3a03d43ad7364da6c496abe85a1eb78a1c841d',
  r: '-0x53f3a03d43ad7364da6c496abe85a1eb78a1c841c'
}, {
  a: '-0xa08d80e9731988a61bb3a5230d72ac1903104cf447a',
  r: '-0xa08d80e9731988a61bb3a5230d72ac1903104cf4479'
}, {
  a: '-0xd2e8ad9a35755ecc731bf0e3fa1cb8dc95b47c365',
  r: '-0xd2e8ad9a35755ecc731bf0e3fa1cb8dc95b47c364'
}, {
  a: '-0xbbbe97ea7157ede514a39dbd4c7480dc9a8e2a43c55ab5a8e22029',
  r: '-0xbbbe97ea7157ede514a39dbd4c7480dc9a8e2a43c55ab5a8e22028'
}, {
  a: '0x66f92def8b7ed1599c02613402eee7c389a058db506d1691bbe08',
  r: '0x66f92def8b7ed1599c02613402eee7c389a058db506d1691bbe09'
}, {
  a: '-0xecfdc52bf584da404486e84c438e0e3a832a2b44919f5b7fb4b0fa023c1959492',
  r: '-0xecfdc52bf584da404486e84c438e0e3a832a2b44919f5b7fb4b0fa023c1959491'
}, {
  a: '-0xb7baa6ce36d9b043a554caca3d33033e7ff5d91439d2f368bb3bba693796',
  r: '-0xb7baa6ce36d9b043a554caca3d33033e7ff5d91439d2f368bb3bba693795'
}, {
  a: '-0x4c44bf579a7eb17710af0d751eee8d5dc2c85e8818f18afd59932ceb71857b23bb',
  r: '-0x4c44bf579a7eb17710af0d751eee8d5dc2c85e8818f18afd59932ceb71857b23ba'
}, {
  a: '0xc413d021d7be897833e69956d5ed43f28997f993434c9939eceb8',
  r: '0xc413d021d7be897833e69956d5ed43f28997f993434c9939eceb9'
}, {
  a: '0xcff537ec4883baaf352c39d9a528155d0b2210a98468edff85450cc5b9274f6a1f2',
  r: '0xcff537ec4883baaf352c39d9a528155d0b2210a98468edff85450cc5b9274f6a1f3'
}, {
  a: '-0x7cea4a531dc0b772ea9d780ee9e9597e51e7de2feada',
  r: '-0x7cea4a531dc0b772ea9d780ee9e9597e51e7de2fead9'
}, {
  a: '0x4dd3a1bc9faa4fc4b28d03d5d2f3ce910497b0f46acf8b38d79ab7d660a6aa',
  r: '0x4dd3a1bc9faa4fc4b28d03d5d2f3ce910497b0f46acf8b38d79ab7d660a6ab'
}, {
  a: '-0x140fae3679b3132f02ec6d07f831a9f31d6f58a112',
  r: '-0x140fae3679b3132f02ec6d07f831a9f31d6f58a111'
}, {
  a: '0xeb060f322f73ffa92e64da5391bcbe38de3365da07a41ad',
  r: '0xeb060f322f73ffa92e64da5391bcbe38de3365da07a41ae'
}, {
  a: '0xe1b1fec0fab49a1ad50751985960c2b62d66419537cd696a62f23d95cf9cd8d488c01f',
  r: '0xe1b1fec0fab49a1ad50751985960c2b62d66419537cd696a62f23d95cf9cd8d488c020'
}, {
  a: '0x1575de43354df1cfd8139edf7543011daa7fd84bb808987b9a78ced8e1e838',
  r: '0x1575de43354df1cfd8139edf7543011daa7fd84bb808987b9a78ced8e1e839'
}, {
  a: '0x7b72cbe91875b784f7f94eada33f24e8d368a9ec475a478eeab',
  r: '0x7b72cbe91875b784f7f94eada33f24e8d368a9ec475a478eeac'
}, {
  a: '-0xf945c8e97c15bee7d2cc6073858638a58cf7c9eb33750aba9962cca3df85d8318efb',
  r: '-0xf945c8e97c15bee7d2cc6073858638a58cf7c9eb33750aba9962cca3df85d8318efa'
}, {
  a: '0xa733b117abd17db81a1358261f67f0d322dc52db114caddb013abc6bf',
  r: '0xa733b117abd17db81a1358261f67f0d322dc52db114caddb013abc6c0'
}, {
  a: '0xe46285b2c411f489715efee0a65fa6745eee96bab9828df38d86e2c4193a3f621d',
  r: '0xe46285b2c411f489715efee0a65fa6745eee96bab9828df38d86e2c4193a3f621e'
}, {
  a: '0x986b09239f3ed6b6d9755fb1625575de7892a03e81d0dc44c37c2',
  r: '0x986b09239f3ed6b6d9755fb1625575de7892a03e81d0dc44c37c3'
}, {
  a: '-0x2046c860747d287f1a655e9b4de50d747072934b2ccf1b4add69f023c7e4bbd7e',
  r: '-0x2046c860747d287f1a655e9b4de50d747072934b2ccf1b4add69f023c7e4bbd7d'
}, {
  a: '-0x5a64d26631312f48b9e6ba7a64468a455f0',
  r: '-0x5a64d26631312f48b9e6ba7a64468a455ef'
}, {
  a: '0x997e5c441b6429a40603ef724e4be4dc43dbbd04a76ce1b',
  r: '0x997e5c441b6429a40603ef724e4be4dc43dbbd04a76ce1c'
}, {
  a: '0x68fc102f299880fb47a5c3bcc9563487a312501ef1474442fef5a69c06ad55bb0b48b5',
  r: '0x68fc102f299880fb47a5c3bcc9563487a312501ef1474442fef5a69c06ad55bb0b48b6'
}, {
  a: '0x5a6c09521e39989c24f0c3b863558b326f1899e96934b43ba3386fc857130e537a120a',
  r: '0x5a6c09521e39989c24f0c3b863558b326f1899e96934b43ba3386fc857130e537a120b'
}, {
  a: '-0xa19e403cb9751bf1a447a3063c1cd734972',
  r: '-0xa19e403cb9751bf1a447a3063c1cd734971'
}, {
  a: '-0xfb48d7b8787ac4cddfac243cce3dcbd190fa21b7a41ae0ce',
  r: '-0xfb48d7b8787ac4cddfac243cce3dcbd190fa21b7a41ae0cd'
}, {
  a: '0x52288e9a6c82893f7a0e7ebea0f4232360de4c',
  r: '0x52288e9a6c82893f7a0e7ebea0f4232360de4d'
}, {
  a: '0x30846667fe619baa3aaf80a5e2c86e5d45fe2cd2d5122c9cfab10a5609f4b',
  r: '0x30846667fe619baa3aaf80a5e2c86e5d45fe2cd2d5122c9cfab10a5609f4c'
}, {
  a: '-0xd2ba98dbad56a3177c7d3b1b9462fb98749',
  r: '-0xd2ba98dbad56a3177c7d3b1b9462fb98748'
}, {
  a: '0x4a467a15ad85fe00e2059672b00ad24fa0a63cad151e922752102e5974ae366dd05e',
  r: '0x4a467a15ad85fe00e2059672b00ad24fa0a63cad151e922752102e5974ae366dd05f'
}, {
  a: '-0x3d4c4561b0ada5df231c53ccb8520463bebfb4855',
  r: '-0x3d4c4561b0ada5df231c53ccb8520463bebfb4854'
}, {
  a: '-0xa52ac00ac8a685a6be8f96dfd07ce3757c6d41a0e16c260c58e606dea07f6bffd',
  r: '-0xa52ac00ac8a685a6be8f96dfd07ce3757c6d41a0e16c260c58e606dea07f6bffc'
}, {
  a: '0x9e769608ab814c8174077c8753f2e0934c2f756370e532bce7a4e7bdb6',
  r: '0x9e769608ab814c8174077c8753f2e0934c2f756370e532bce7a4e7bdb7'
}, {
  a: '0x309978fa721fead9852d27b1ace9c0497a5bce',
  r: '0x309978fa721fead9852d27b1ace9c0497a5bcf'
}];

const dataSmall = [{
  a: '0xf247',
  r: '0xf248'
}, {
  a: '-0x29bbd1f01a4bfc9',
  r: '-0x29bbd1f01a4bfc8'
}, {
  a: '-0xa852f3efa7a8d',
  r: '-0xa852f3efa7a8c'
}, {
  a: '-0x65e85b53d6a',
  r: '-0x65e85b53d69'
}, {
  a: '-0xe',
  r: '-0xd'
}, {
  a: '0xbe4',
  r: '0xbe5'
}, {
  a: '0x90',
  r: '0x91'
}, {
  a: '0xa4484',
  r: '0xa4485'
}, {
  a: '0xb0efd99d602b6',
  r: '0xb0efd99d602b7'
}, {
  a: '-0x435d4fa0a2a00ce',
  r: '-0x435d4fa0a2a00cd'
}, {
  a: '0x3ece1a27d3291058',
  r: '0x3ece1a27d3291059'
}, {
  a: '-0x55b9d5ef0',
  r: '-0x55b9d5eef'
}, {
  a: '-0x2133f8',
  r: '-0x2133f7'
}, {
  a: '-0xa1fa7adb4f',
  r: '-0xa1fa7adb4e'
}, {
  a: '-0x6d4fb56f7cb336af',
  r: '-0x6d4fb56f7cb336ae'
}, {
  a: '-0xa28a22f02dfa',
  r: '-0xa28a22f02df9'
}, {
  a: '-0x1415cb0c6cc982ed',
  r: '-0x1415cb0c6cc982ec'
}, {
  a: '0x76',
  r: '0x77'
}, {
  a: '-0xe2230ebcb3a01b31',
  r: '-0xe2230ebcb3a01b30'
}, {
  a: '0x0',
  r: '0x1'
}, {
  a: '-0xeb',
  r: '-0xea'
}, {
  a: '-0x669b53430',
  r: '-0x669b5342f'
}, {
  a: '-0x2',
  r: '-0x1'
}, {
  a: '-0x93706a72',
  r: '-0x93706a71'
}, {
  a: '-0x125f',
  r: '-0x125e'
}, {
  a: '-0xa1681fb3b',
  r: '-0xa1681fb3a'
}, {
  a: '0x0',
  r: '0x1'
}, {
  a: '0x174c579cb2',
  r: '0x174c579cb3'
}, {
  a: '-0xad97f2a5d0da5a47',
  r: '-0xad97f2a5d0da5a46'
}, {
  a: '0x22c3a02b',
  r: '0x22c3a02c'
}, {
  a: '0x0',
  r: '0x1'
}, {
  a: '-0x6c7a62635dd041',
  r: '-0x6c7a62635dd040'
}, {
  a: '0x7d6c160',
  r: '0x7d6c161'
}, {
  a: '0x70d02974',
  r: '0x70d02975'
}, {
  a: '0xacd2e3f511',
  r: '0xacd2e3f512'
}, {
  a: '0xd1530e120',
  r: '0xd1530e121'
}, {
  a: '-0x41',
  r: '-0x40'
}, {
  a: '-0xc099253a',
  r: '-0xc0992539'
}, {
  a: '-0x1311bacb1247f',
  r: '-0x1311bacb1247e'
}, {
  a: '-0xdd5a9f9f5f2',
  r: '-0xdd5a9f9f5f1'
}, {
  a: '0xd0b512822',
  r: '0xd0b512823'
}, {
  a: '0xb4a43dcde8ab0f9',
  r: '0xb4a43dcde8ab0fa'
}, {
  a: '0xc',
  r: '0xd'
}, {
  a: '-0xb9721c73639',
  r: '-0xb9721c73638'
}, {
  a: '0xcb98',
  r: '0xcb99'
}, {
  a: '0x0',
  r: '0x1'
}, {
  a: '-0xbfc319b',
  r: '-0xbfc319a'
}, {
  a: '-0xb',
  r: '-0xa'
}, {
  a: '0x6a565159',
  r: '0x6a56515a'
}, {
  a: '0xde0',
  r: '0xde1'
}, {
  a: '0x1',
  r: '0x2'
}, {
  a: '0x8',
  r: '0x9'
}, {
  a: '0x3d6ac84564ff',
  r: '0x3d6ac8456500'
}, {
  a: '0x18cd4a720',
  r: '0x18cd4a721'
}, {
  a: '-0xdeccd5',
  r: '-0xdeccd4'
}, {
  a: '0x68e021ce78',
  r: '0x68e021ce79'
}, {
  a: '0x51509bedfa208',
  r: '0x51509bedfa209'
}, {
  a: '0xc8fa0224f6e',
  r: '0xc8fa0224f6f'
}, {
  a: '0x0',
  r: '0x1'
}, {
  a: '0x7862',
  r: '0x7863'
}, {
  a: '0x6df3deb',
  r: '0x6df3dec'
}, {
  a: '0xf9c2',
  r: '0xf9c3'
}, {
  a: '-0x249d44709be',
  r: '-0x249d44709bd'
}, {
  a: '-0xcc2f8ce60791',
  r: '-0xcc2f8ce60790'
}, {
  a: '0x55',
  r: '0x56'
}, {
  a: '-0xceec554',
  r: '-0xceec553'
}, {
  a: '0xae6093e38a',
  r: '0xae6093e38b'
}, {
  a: '0x6d03ff2dbf1',
  r: '0x6d03ff2dbf2'
}, {
  a: '-0x31b243f98f',
  r: '-0x31b243f98e'
}, {
  a: '0x6bf6cbf4',
  r: '0x6bf6cbf5'
}, {
  a: '0x6e00082c5451f5',
  r: '0x6e00082c5451f6'
}, {
  a: '-0xc237f2',
  r: '-0xc237f1'
}, {
  a: '0xd432060ceec9a8',
  r: '0xd432060ceec9a9'
}, {
  a: '-0xa9f8af',
  r: '-0xa9f8ae'
}, {
  a: '-0x39b3c2374e95aa',
  r: '-0x39b3c2374e95a9'
}, {
  a: '-0x62f5f',
  r: '-0x62f5e'
}, {
  a: '0xc551076542103c',
  r: '0xc551076542103d'
}, {
  a: '-0x5',
  r: '-0x4'
}, {
  a: '-0xeecf',
  r: '-0xeece'
}, {
  a: '-0x1397085b19e5',
  r: '-0x1397085b19e4'
}, {
  a: '0xfa3',
  r: '0xfa4'
}, {
  a: '-0xec04000779a7f10',
  r: '-0xec04000779a7f0f'
}, {
  a: '-0x49e48ad1daff1dcf',
  r: '-0x49e48ad1daff1dce'
}, {
  a: '-0x9ac9ff8',
  r: '-0x9ac9ff7'
}, {
  a: '0xf4e',
  r: '0xf4f'
}, {
  a: '0x23',
  r: '0x24'
}, {
  a: '0x398bc18',
  r: '0x398bc19'
}, {
  a: '-0x34ad66a',
  r: '-0x34ad669'
}, {
  a: '0x7bac330',
  r: '0x7bac331'
}, {
  a: '-0xeead4b4fb48a8',
  r: '-0xeead4b4fb48a7'
}, {
  a: '-0xede2b3',
  r: '-0xede2b2'
}, {
  a: '0x4',
  r: '0x5'
}, {
  a: '0x0',
  r: '0x1'
}, {
  a: '-0xe5582ff000fccb60',
  r: '-0xe5582ff000fccb5f'
}, {
  a: '-0x61',
  r: '-0x60'
}, {
  a: '0x0',
  r: '0x1'
}, {
  a: '0xfe3a0',
  r: '0xfe3a1'
}, {
  a: '-0x693dfd4f1648e',
  r: '-0x693dfd4f1648d'
}, {
  a: '0xcbf25acf1301',
  r: '0xcbf25acf1302'
}, {
  a: '-0x21ab5eca0a1',
  r: '-0x21ab5eca0a0'
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
    let r = d.a; r = ++r;
    if (d.r !== r) {
      console.log('Input:    ' + d.a.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: ++');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a; r = ++r;
    }
  }
  return Date.now() - t1;
}


function testJsb(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = d.a.increment();
    if (!r.equal(d.r)) {
      console.log('Input:    ' + d.a.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: increment');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a.increment();
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
