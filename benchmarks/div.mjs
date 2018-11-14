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
  a: '-0xd1165f8a2be61f42b42fb92fabe4ac42cafd9847a4658810f41a78e',
  b: '0x3f34e4bf42ad9f6eccaf6e65d4d0cf77ca9ca0a8b1d2',
  r: '-0x34ed8ff0ddd4'
}, {
  a: '0x24d831fd92eb11a08b829d943c2ffd07c939e7e6c481aa04f6ef8f9',
  b: '-0x5b0c3de539b371e933',
  r: '-0x67989752984f9893030bb029bd065590d8e98'
}, {
  a: '0x1d36d94a27bc4717b70db9714c7461ff2027de9235e15ef5f4',
  b: '-0x694ca71c870aed',
  r: '-0x47064bb873a0e4ad8268127824d2c4d37e11'
}, {
  a: '0x445afcf4e9aa11f64de09f2c2cf6ef0357c73c884f0e9415020861be9ec5cccfdab450',
  b: '0x2c5b34ff3ce324457c297',
  r: '0x18a82852cf32a001fbde1bb1443f1f7bae7cd0b1a01243b5d9'
}, {
  a: '-0x69fb399dafaba50a991ff383c25137bcb32b49a1f83b4f6e7',
  b: '-0x639e69665383',
  r: '0x11059b7e25a63081886a89664f580c554425c7'
}, {
  a: '-0xaba91bcd289c39bb1e2f12f0e771f3faa1ccb4999d',
  b: '0xc0ca727dde2eca14885e89a7443847d7274e019b50',
  r: '0x0'
}, {
  a: '0xc813a49827ff54da42dc7223810fe1031e1de91d880e4f42c',
  b: '-0x60436',
  r: '-0x214144a0323ca196f8308e4765672571e813c64ebebe8'
}, {
  a: '-0x962467165359868e3c7ad3375664d2302b0da3bbc0db72c3a6',
  b: '0x9cb97582ebff472e3ee0da04475398d6d1ae4aa1d',
  r: '-0xf53f8fb7c'
}, {
  a: '-0x9fa7048a1ad66109b2868e277de648e36e126462a03850f21e3fd9dd0722b043a7ea',
  b: '0x633e34c7ae85e8af6b89816d23fb7735fafd50f058e3',
  r: '-0x19bd3e6f2d087f7403b8799d6'
}, {
  a: '0xd05bb0b2259cfc40bc50a218904a7c8d569ee6a1f945e514da7c7f98b2c',
  b: '-0xb9f45a3dd4b3a40d884b71ceecef93cd9c1dcd1911',
  r: '-0x11ed7bac322eac7cb4'
}, {
  a: '-0x108c792a379246eeab2c7ec40a2b9c68814a01834272d7dbbb5b96',
  b: '-0xc05b52be521d879f573f17087f9400a6',
  r: '0x160627cfa082355bdcb5d9'
}, {
  a: '-0xe82b69f2c424d3b5a93df0320444aad3dd657f59e9edc5ad8a9fb504838',
  b: '-0x299cd0936',
  r: '0x5944e045a5e70fd7e8895a44d9e240da47d51f9ca98a857bf6e'
}, {
  a: '0x85832625515c1b2645803ee85d1a9ac62ca503f007aecaf73869be353',
  b: '0xb2cfcf3b9dbf54477cf41ef56',
  r: '0xbf255f33360a78ca3797e5e64eedd9b2'
}, {
  a: '0xdb84cea3a7d25a6d3ecfa4b2a70bfd84945d6473376530605df22d158',
  b: '-0xa6656e4ec0d88cb604b74ed2be8e5a07bf2be6f595ab9a60',
  r: '-0x151ba97e6c'
}, {
  a: '-0x1ba154d2a874daeb7bf3e659ca1e3d7d18b9824d64caa889372d0e5ab5365a423c20',
  b: '-0x16750ddbde2317648e40cbcbca9ee7e2d4a794aa145',
  r: '0x13af804e0d13e9c541cd6439b3'
}, {
  a: '-0x509d29ed2c25e6e332a09f62b5d3eaa2a1fa51427c500e77c150caf0851',
  b: '-0xcab6bd7fb2cb8fbb7fd9f1cec28d802',
  r: '0x65cdee76e708265ef3c589e2c545'
}, {
  a: '-0xd690f9eec748e04ebc505d16c0361a60cf7a1ea259e601dcc86',
  b: '-0xdd6b11c314a9da94622e240d971',
  r: '0xf813f28b0b670fc9621b1d15'
}, {
  a: '0x88d575e33babf095f173ae67f1c3b691a2e333d27b6d881a2c6e88e836faca0d',
  b: '-0xfc0e9898e8a7c491bd',
  r: '-0x8af96f249dbd6a56949ecabe11a8f015df710059fee1da'
}, {
  a: '0x166bc69836b0d79f8eef7bcc84aa3aae23a12055ea7',
  b: '-0x9f1f6d039',
  r: '-0x241245447fd64fa87776d425256e5ff9dc'
}, {
  a: '0xedd75612542353b06e67dee081223a9f0d90833bad2ac9e022854d6',
  b: '-0xa280c87a460d5d0',
  r: '-0x176af2ac5bd62776633ba48f5081ce357cf320179'
}, {
  a: '0x8366358ff309ee9d2f647c45c5cb5b782f35d35fa4404d922eccb1954e08c88fe',
  b: '0x3078ef284f98538531b4755c3e1d611c73abe35869326ca9a',
  r: '0x2b5f75c47e963cfb4'
}, {
  a: '-0x5fb00dcc85ffabb9747ce82ed8e2fdd44bbbb6527e5054e6165',
  b: '0xb9b4057cc482686a871ecda8fca0415f5ee60f80c85dd3f',
  r: '-0x83e8'
}, {
  a: '-0x76bb630ee6619cc1c58d7ac7e174aa1288ddf4eb7065a',
  b: '-0x35ea7e65acd4b4645adeac3c37a0df02c26e267e856ac4',
  r: '0x0'
}, {
  a: '-0x16801fb25d975fb6a9e496a7965beff14ba55877af37550a00977eb4',
  b: '0x192acf056346',
  r: '-0xe4dfc18dfc91c02e3906eee3d6e6815295b4026173d6'
}, {
  a: '-0x3e3309ab269159b7f7589ad0cf3cf72d4e0944ed9d1a3b0e24bf12b',
  b: '-0x5ba782e5c3b1532fd5983dea',
  r: '0xadbaae93cf528c45c732626ac3550cd'
}, {
  a: '-0x88cb09e0e667eea7710161b91f7d677641123c6d03ce9f6871c953ea4a16beb3cc',
  b: '0xd2272c46fa596d6',
  r: '-0xa6a2caace9c30aafd825b83ae99b5fbc35f4438c5eedfeccc1a'
}, {
  a: '0x4a4c8a110e063bcdcaedb6fd9dded2fa5c07239fca067b9922bb5db8a1',
  b: '0x8e3a8ed860d64687dcc2bd6b7ce35d9120caf778',
  r: '0x85bb66bced1e52e1ad'
}, {
  a: '-0xad6ab23f92474acddc1bd75125a7e22d4964424e7ad0b8a889',
  b: '-0xbdcbc4435e2',
  r: '0xe9e850de2bddbb9d550ececa4ab23a2755c33b7'
}, {
  a: '0xdf08a72052af72c3439ad7ced1b7ae8f22f91408405a12d122d28ea8c',
  b: '-0x41da147928',
  r: '-0x3630bf68a3d56b639f9d05a8b0abe4df86555d27c706945a'
}, {
  a: '0x15eedc83c9229b462d69f0ec6e4ac9afc3949c1f69ee',
  b: '0xd9dedd3a934246b49f1dd',
  r: '0x19c584150af54ad9e57f454'
}, {
  a: '-0x34d1f6e82c4ca2007ddca7cdd3364acfce53d06b41e19a8d5827806e1',
  b: '0x68d',
  r: '-0x8102d04c2389413010c28e198617004daf485c9d8e70e961c6ac80'
}, {
  a: '-0xe6db283cb8f23991133ec6a2f6898c242a547e1ce8b25dc770b283291dd3653',
  b: '-0xc0d3140f5c3a3453fb802d',
  r: '0x1327dede736a84f21d80765434e578b88f5deb7853'
}, {
  a: '-0x5317c6a359679298d7229adc7fcd722007d4eb83fb4fcfd56be5df2',
  b: '-0xe8d3c26284259fce94ebb155eb8f1f8f9f4822c2ba',
  r: '0x5b5ce9953f9d0'
}, {
  a: '0xde8befa750738470012abe1edc0a6bc0b01b052ee3b3d',
  b: '0xb',
  r: '0x143b4455075051dba303e2bcfcbb2111845f8c1b89105'
}, {
  a: '-0xd81c0ea480483a54f8c8cd440be9fe94d6a9df8941f5400f7e3ee7c38f2d9db210',
  b: '-0x1c341a83212a4c512be89a4fca98602c09adc',
  r: '0x7a999b94d6d31b38e707bab938df64'
}, {
  a: '-0x7e950c1978bc28bc79c9a2d9421b0e983170c6fbf8219148fce4',
  b: '-0xcfe37941f5da',
  r: '0x9be083528b7625633d0b797ca891bfae1b2c22ec'
}, {
  a: '0xeb56650f41cefc9b47d40b0197ea52376cd75bfe5bf9ce927034936a0c39c9',
  b: '-0x70ead85475',
  r: '-0x2158b4b225a32d58b3372e2ff3d6b0b8d1fc80d1aa7be4e8448fc'
}, {
  a: '-0x497ea730a24ccd2b6a57615534854b1ca556cfba11409be56530d1240f36',
  b: '0xb96af72f2a',
  r: '-0x6578bde14edc25edd0d6ffe653bc625047d762bef87deae284'
}, {
  a: '-0x94267974a52b38315662192234b0cb60b178fa5d586a16581c91738f0d',
  b: '-0x8b238',
  r: '0x1109494e80cdfa615be6022a0f94f9a689348d8e3073dd9d0dd332'
}, {
  a: '-0x76c396e06dd47bf485dcf86c1cc22984c66a1cc811195ea853554e2cbfb36ae3eadaf',
  b: '-0x9d1a9aca24c0f4638c6bf6b74de44faa05a',
  r: '0xc1867c416115f745bc3322a81b3cab1ed0'
}, {
  a: '0xbeb1333d7b0db58ef497f09b8989f66d84c334345753bbc784dae231c9f',
  b: '0xe9f472456643c1eb48009eac3975',
  r: '0xd0a9276a98abec28baa09e2fab1daf5'
}, {
  a: '0xa0fd879589d08a60aeaf28fe1e60c33d1ce4187b327e',
  b: '-0x5c6941b7ef605ee7eee5',
  r: '-0x1bdfae1ee915b141dfbc787a3'
}, {
  a: '-0x318d984e6d977b5c7a1c42da3b4831e1a21163073cd7feed427faeea68236703b2',
  b: '0xff56',
  r: '-0x31ae963e32e5479e090e4654efaf5c54f27a6850824e8712f5166fd0a8b36e'
}, {
  a: '-0x3a969b721b97502ac0adf6a7e774e1cf51f79cd006da6b40d799a7aaad0fd476d3',
  b: '-0xdae1baf2a84c3ac34991a73a0ce',
  r: '0x448616f613c1d27a7c4594a4a7d13bb0098aa0a'
}, {
  a: '-0x1e8fd4742db55c4d9ba4e1f9ef678951a82b59f8e7a12',
  b: '-0x6e554f180ad9f797ead2600',
  r: '0x46e93125cac424fcb0cfdb'
}, {
  a: '-0x14b71fb1ebd85a2c4ef59f7700d0707d6c8ca2a8f9780b1efbc1328202',
  b: '0x6912385949560a2fb380c73b',
  r: '-0x3278c3471eed4d5f94834eaac8216b0f8b'
}, {
  a: '-0xbf9801f89a12ef31f08bde7312709ea14c2d500cf522ff389bca5ab716c6ce0a7842a4',
  b: '0x33cac82867b9f76d751e6088c721e6',
  r: '-0x3b30450f06830159a5cf1b9f89af3112c03efdd88'
}, {
  a: '-0x69e2b0f49c0fac863ed3ea28b8ecc4307cc4f21ac671bf50896',
  b: '0xd0f20d859a2af55963caaa907f34a0c5',
  r: '-0x81bb1c9564fba0d8a4c'
}, {
  a: '0xe953c25334b809f9f90cc6204178d5b4ef1fd293b2afbd8804c4be169bc8f10f2',
  b: '0x63549525a363fd',
  r: '0x259581c9e0c0f7819f6763d6da050ea41a903b4045908b55e738'
}, {
  a: '-0x9f94ac64b8d8b770d47da446fde525d1193013c060da1b8fd0aa2d7',
  b: '0x162401178eca7e226cedb03',
  r: '-0x73524e101a5bd0bf1e265a0e4b449171a'
}, {
  a: '-0x3ff0ddd74b809fe7268f0890507f3e1ec2d3d9e1b47',
  b: '0x1eeec492cf08737013efe49a0d67f91429357',
  r: '-0x2112d50'
}, {
  a: '-0x16782fca0fd3a8b5b7f0698d5716e517824a3d3b318477',
  b: '-0x2252072a49fcf621903cf5',
  r: '0xa79a39f568992d7574f610bb'
}, {
  a: '-0x71078a8ae4bd8a2e0b59ab861cf67c4f2ced709c8d7b372755e507038b79b7db9',
  b: '0xed348b',
  r: '-0x79fc3954935eb6776af54f85afaae64e6bf633d415e26b3d2726bf10f46'
}, {
  a: '0x97c163732d22d32090c8165659d109e16d692e124a76017e3db96e1',
  b: '0xb346c2518',
  r: '0xd8b37966f2e9752e2818cc7ad2c71ee4cc940c778101b7'
}, {
  a: '0x4583681679fa00262db4a9f58f8a5b1356d2323ad05e85f488002ad7cb45ded5178b',
  b: '-0x73c112c249ad0',
  r: '-0x99bc049e4658ab7cdf424fbb38bb78ed961cad44e13324e6e4ddd6b'
}, {
  a: '-0xf37a244068d90a99b56ff3d472d4baa3f405c9991d305f6c22778753',
  b: '0xdc2ebf3055717268b5187',
  r: '-0x11b1577d44340a204b5cb73f8d5c9b20f81d'
}, {
  a: '-0xe8f403680be9ea7a966f25a7ecb6a68d22a6f700a8d808006fcfef15558fbd',
  b: '0xe7263cb98a762f',
  r: '-0x101ff6bd2c58585e70679697932a5dad6ed3d3465dca066e8'
}, {
  a: '0x40053884f2793eee59e41df02bf2f6a895d1452a2af00741a9f11c89f9dc7',
  b: '-0xac15b0f7b858ed0bf8bac5b17464adf451befdb0da',
  r: '-0x5f3d3f7db9cc35f86f2'
}, {
  a: '-0x606823f3b0a7de6258b32b443ac0919b1e139f08ef368',
  b: '0xf9ab63ead333bff6ac91f3',
  r: '-0x62d9eb3d48ffc854ffb6743'
}, {
  a: '0x1661d48332b42d6b54d5badcbd81a91da597e38db6631f443c',
  b: '-0xf9c3fbd9ad23cd3964e34420d8fd04b2d4bfddd',
  r: '-0x16f0da74527'
}, {
  a: '-0x94f8a83e18ae567f8c27123d1dd27179147b62239b77b27cd0df83',
  b: '0x962d',
  r: '-0xfdf260a923c0f1a241ee0c9e8bdd9f99a4a64ca41223009249'
}, {
  a: '-0x5dd27b8bcfa966ae1db4619dc8d44ee9b40d581285bbd',
  b: '-0x42bfecb863f5bd4338c576defd41a2117e1c909695ff',
  r: '0x16'
}, {
  a: '-0x7af9f405c8c787113a936e497173fe00174a60f956aeb5e4f',
  b: '0x568f7b09f',
  r: '-0x16bb2eef1c66f3bc6b55432eacffad92f08898b3e'
}, {
  a: '-0x63bdd3157b278c62f2bc7ed295688bab9fefa759a7b8de2fcf',
  b: '0x65f75cf6af',
  r: '-0xfa6a18cb19ba016ae60bacd8abc05b3896517217'
}, {
  a: '0x7e520e7be5f56a23d7a39a1718b039205945e2de2b3c',
  b: '0x61172a1954c5ccdc08186824c7a9',
  r: '0x14d12422a3aaca288'
}, {
  a: '0x6ceb151391cdbcd7022b0e83dd43e5eb3a085fc8a175ccd7d37aca7c84b451c16',
  b: '-0x4ab2d7f6ff1fc2a1a451b8da',
  r: '-0x1754642d9b68bde066bea0a843c2b05ce733cbd9c0'
}, {
  a: '0x891d3fb7aa72aa84a5213ca1393c354f9db200835ec2',
  b: '0xb9a450deab0f59f8133e7809528',
  r: '0xbd14994fa3b7d5bd3'
}, {
  a: '0x85cd692da6bc6a9e872798eb5bdf57b07a2cc052f97b9174420e1e26',
  b: '0x783cc7ffb482c306',
  r: '0x11ce1a5d2d4dc5a39b8e44a2f2793427ba0700fd6'
}, {
  a: '0x58f05f443f0b1c1471607cf325e448840ffba05188005095f03688db4b',
  b: '-0x8ac8923c1989863bfdd80d191e7f5277d86ca',
  r: '-0xa40e89a31515ec72568ea'
}, {
  a: '0x4894fcac80a0d9789874739c8dc500de7188e4da36e8ae',
  b: '-0xaad460f1528daa57a92f',
  r: '-0x6cc4e58a9b9a987d0a33b36c0c'
}, {
  a: '-0x513b4abc0b541d87f61c9612d54e6b2ef2dff7065ea3a9b1904903914e08974f8',
  b: '0xbd7a8c56e1cff95251843a2621333',
  r: '-0x6dc00171eb993e466c537adde7d64ae4b3c3'
}, {
  a: '0x9fb147c47d3b245fd91516f605f854a79a1f06d48e4e19a04d',
  b: '0xa3490afb44c20796f8e6d4532aa3cd6c34',
  r: '0xfa5dfd36c4d3d6a6'
}, {
  a: '0x4ae06634cd7f7d49d1fe4c6a0bc98816b74e7a369a94ab81ece96075b',
  b: '-0xaeeefe3c85cba33cce2465db38ba48563e08',
  r: '-0x6d93474d36b46c1a85de5'
}, {
  a: '0xb33cc915de16040abac8f5a84c7c619b0b62dc7a347837c5f563102024631074d0',
  b: '0x1d1fe270c6e123ae0c566965f08acd',
  r: '0x62777b9ad5fd3a3bc92c0ef11ed8d30f2832f'
}, {
  a: '-0xb8f1c20d165cfb16a9af736ea0145e87ee33bd330db08fe2d0962d46dc',
  b: '0x6e157c568cfba8e4a6cee91d30451c4d',
  r: '-0x1ae167c1409cc17ca97ece5dcc5'
}, {
  a: '0xc1ea1317f36b849d680ef1bca6c5644b1878a770d922841b572a9',
  b: '0x13142858a8ec3c70',
  r: '0xa29f5269af3d7ef5f0b38ef69e48684e0ce10b'
}, {
  a: '-0x19bc10039ad9f5a4f28ad14fc6b7b078268753a115a3e2ec442aa2dd5a',
  b: '0xbdb872babbc426ca921a',
  r: '-0x22b99fe071c6f0c364bddf3b8e2ca79052a936'
}, {
  a: '-0x16597e168cecf515d3e5b6bda747fa56ee6208ad10200dcdb54da4',
  b: '-0x49f825dfb3f2987b142a627ada8fd9a193f767a22180',
  r: '0x4d597a9b2f'
}, {
  a: '0x8aabf02c5927d2c32b16fe8c9614cbbc7778911fa4ba5d1',
  b: '-0x2f191a58d40edbd9c9bde44868fe2c91ad8d0d1b5',
  r: '-0x2f1bec9'
}, {
  a: '0x16fd358ffdf6ab81fd36f1d618c2585f9d888fbef1b7e6140e05a3c012d0957da7',
  b: '-0x6464144f43f5928655fbaa863b3a035b965d0f8e',
  r: '-0x3a9f7758fdb547b3fc5760fe75'
}, {
  a: '0xab1456bc60afc3a05807820def704f2a98a95ab34e96825b0d',
  b: '0xa3b808a9cbe4c024078925a27',
  r: '0x10b826795dccd0b8ddbb22f399'
}, {
  a: '0x377418df8b63091d25a801510f0e2649b5f2c6afd4',
  b: '0x2b2ec2055cb844eec449',
  r: '0x148bed2ef04bcdee2a2ca0b'
}, {
  a: '-0xea4ff7f381f5849dcce75c3e521f0fc439f83665fb81a5cf02bab',
  b: '0x9',
  r: '-0x1a08e2a947542b2dfa529878b3ca8ff95bc63eeee30e67c1aaf84'
}, {
  a: '-0xa64658037c39dd2a48f3d808bfe6873d884692f0a5',
  b: '-0xc508ad5619274c2d150a4',
  r: '0xd8091fc664669122bfaff'
}, {
  a: '0x421917c25f5da6eeb6f89a88b9edb212023abde210b7648770c0138491c',
  b: '-0xfca5b399bfa9',
  r: '-0x42f9a4705d13a726d403db56fd54fced29f1d881744fa0d'
}, {
  a: '0x37672110b1170a704eccb2fbda63906fbcd72a1593c192f949fa88f1',
  b: '-0x7524911f8e03cc377d8fb73fd59d667580f24fcfb816f3',
  r: '-0x791354b337'
}, {
  a: '0x7d915e07bfe89389db8612d7397d84f8da2d2a38c283f',
  b: '0x3',
  r: '0x29db1f57eaa2dbd89e820647bdd481a848b9b8bd962bf'
}, {
  a: '0x65c2ce1876ed372dff20119858fa4ec537fb4bfdc53ce682cf94c29d4f929e25587',
  b: '-0x1cc6bd814405ec6d01',
  r: '-0x3894930e0133eece66544b7aa4c9bc3c9222828cb3c2dfc42b'
}, {
  a: '-0xbbe13c48660c9da5ff4f1c075c9ece3ea66afdaef387424b39a3bb3ba8c86dc280e2',
  b: '-0xd3b5668308232cef6d8',
  r: '0xe32f9fb6417872f788db7286e549dab6032409c3619e10e19'
}, {
  a: '0x5691060c269afe703d32f544934f520ae8864bd9a1c05fcd',
  b: '-0x512c6df487c7936439b2a9533f638450066',
  r: '-0x1110207b4bc210'
}, {
  a: '0x6db243f6d3422781ba6b9a22eb7530a86125f3b67759ebc',
  b: '0x73960a156d4b6299aea',
  r: '0xf2f495558f96ce5c582a616f975e'
}, {
  a: '-0x422096285baa2c279fc1289235b0c86cfd31272d9ece518bb7f44158ce5cacb',
  b: '0x717737db6c8594f72b5e8136264c6dd4f',
  r: '-0x9532151f7d812c16178c693d7e2218'
}, {
  a: '0xc173d0eaa78aef67a32d4bc57c5704a7e6473cf44e648216ab088670e',
  b: '-0x9',
  r: '-0x157ea56f67f2fe27f5afb315f15f00846eeb788cec440e744be480b73'
}, {
  a: '0xf6525d0f18895bb5383f16683704342e326ebe148a1d5a38ca085949bcb2',
  b: '0x5bce5b42fc8dae1b0917a987f26d835ff95f7e51',
  r: '0x2aedd629ba1ea396c44cb'
}, {
  a: '0x284a08b68f9f802599faf6c2d1eb600a1e645cfb763a9c747344e6dc67be46',
  b: '-0x7d4fc992bb1e7c5ce850189980f92ab1c7e75512b55',
  r: '-0x524e9aed473487ddfe0'
}, {
  a: '-0xc536f5b7960f07c1507d720023f002f6acb95d6b6277351baa17e737e64701',
  b: '0x1c01396675c2caa243f05b073d4ac0cc2c12',
  r: '-0x70acc3d39e0470fe7ded87f16d4'
}, {
  a: '-0xbacda8fc6199bc1349f63bc3cc86bf2a90829da9c2d58cacf516545d15179702fafa2b',
  b: '0x4ff12590a5',
  r: '-0x2563460e19287e1b36652715ab06d0cbf8c489efa47376ad2ac8a3089f71c'
}, {
  a: '0x2d5813e9fff839ad5f6099caa618139ef2daf6014025d2f788f5bbce9c55933c',
  b: '-0x839d3b0718c17c7b0dd7f8818831d6fca8b8db9',
  r: '-0x5832a1464faab0ecf420ec3d1'
}, {
  a: '-0xddf36a2f4ba13e71ea46cc710bc7e9414174582e4557',
  b: '-0x187c0515f7f9411392b04225394af8bee13a2af5',
  r: '0x910a1'
}, {
  a: '0xa45ae29f78d56fd38b72ae13515dfc9de403cefaa12e6ffe93fe88660a48109',
  b: '-0x6b3de',
  r: '-0x1885644d6550188912260e311ca07d9a577f9dd37b6a57bce6ccdb8a52b'
}];

const dataSmall = [{
  a: '-0x5614445a23b',
  b: '-0xada',
  r: '0x7eeb32d5'
}, {
  a: '0x4171998abe2b36',
  b: '-0x45',
  r: '-0xf2ce4880e6a7'
}, {
  a: '0x96a8a422767',
  b: '0x76984',
  r: '0x14536bb'
}, {
  a: '0x79fb1f72b11525',
  b: '-0xd955ff8',
  r: '-0x8fae6dd'
}, {
  a: '-0xe9a9e81b072ba',
  b: '0x88cf2ca06',
  r: '-0x1b53c'
}, {
  a: '0xb7fda6a326b1ae',
  b: '-0x71f4d4',
  r: '-0x19d54a264'
}, {
  a: '-0xfa7c66fcfee594',
  b: '0xac7ea93',
  r: '-0x173bf375'
}, {
  a: '0x591dd11bc22cb3',
  b: '-0x7d',
  r: '-0xb682b265e7c8'
}, {
  a: '-0xbc983b0a4',
  b: '-0x30f03722',
  r: '0x3d'
}, {
  a: '0xce7d4eb89b37ee',
  b: '-0xe68b',
  r: '-0xe54a5cc428'
}, {
  a: '0x261377be566',
  b: '-0x7dedf59c42b',
  r: '0x0'
}, {
  a: '-0xba2cf234b',
  b: '-0x8930',
  r: '0x15b6a2'
}, {
  a: '0x6394b588159e1b4',
  b: '-0x7d13',
  r: '-0xcbd21667437'
}, {
  a: '-0xd598678363dd581',
  b: '-0xd6dd8475d',
  r: '0xfe7ca5'
}, {
  a: '0x1f92d3983a8d687',
  b: '-0xa2',
  r: '-0x31e4dc9810ace'
}, {
  a: '0x65d7a5335b719234',
  b: '0x6eab590',
  r: '0xeb94dcc62'
}, {
  a: '-0xdac57ce71f19c',
  b: '0x2',
  r: '-0x6d62be738f8ce'
}, {
  a: '-0x187e7bd68505',
  b: '-0xee79',
  r: '0x1a4b5a97'
}, {
  a: '0x3c1c1964fc35',
  b: '0x37103900',
  r: '0x11776'
}, {
  a: '-0xdafcd4d6e2',
  b: '-0xa1',
  r: '0x15c343437'
}, {
  a: '0x4108387ee6b2',
  b: '-0xf9e70b0f9',
  r: '-0x429'
}, {
  a: '-0xae5a27da3b05ad5',
  b: '0x2aa6',
  r: '-0x4168f66cca08'
}, {
  a: '-0x78f235af14',
  b: '0x45',
  r: '-0x1c0ba4907'
}, {
  a: '-0x85c7fdd464219f',
  b: '0x1f63',
  r: '-0x4432971fa55'
}, {
  a: '0x8d8770791384',
  b: '0xcf6b9f62',
  r: '0xaead'
}, {
  a: '-0xf93be6574161d1',
  b: '-0xe29',
  r: '0x1199e01a8034'
}, {
  a: '0x1b945d5761a12',
  b: '0x1c',
  r: '0xfc27e7b1337'
}, {
  a: '0xc32fe71510dcc',
  b: '-0xbe28acb',
  r: '-0x106c4eb'
}, {
  a: '-0x8c1f54a83d9f1eb',
  b: '0x3c5f3c3',
  r: '-0x2522be93f'
}, {
  a: '-0x473eb1d459eab9c1',
  b: '0x98',
  r: '-0x77fdcd2fbfdc2b'
}, {
  a: '0x5f98139191f07168',
  b: '0x964',
  r: '0xa2e02ef8e0cd3'
}, {
  a: '0xdd67b2ca3aa9e3cf',
  b: '-0xe765d',
  r: '-0xf4f1e7fcd89'
}, {
  a: '0xa54ce7edac47093',
  b: '0xe79b63ea12',
  r: '0xb6b5c'
}, {
  a: '-0x1448db380aea2',
  b: '-0xf98',
  r: '0x14d02422ed'
}, {
  a: '0x230c1c4e8a1',
  b: '-0xaba',
  r: '-0x3447045f'
}, {
  a: '-0x1a4c4e8ae759d19',
  b: '0x73003',
  r: '-0x3a8a9adc31'
}, {
  a: '0x4f4b2727fea15',
  b: '0xef9',
  r: '0x54bbf8f42c'
}, {
  a: '0xb2b8fcc1d2',
  b: '-0x8a7871b38',
  r: '-0x14'
}, {
  a: '0x7291c5d1b6fe',
  b: '0x224e861a8',
  r: '0x356e'
}, {
  a: '0xf64e438780b180b2',
  b: '-0x343222b43f5',
  r: '-0x4b8084'
}, {
  a: '-0x4ec7117f1746',
  b: '-0x466',
  r: '0x11e90d86d7'
}, {
  a: '0x7874f09d2cbe',
  b: '0xf798517',
  r: '0x7c8bb'
}, {
  a: '0xd74282fc2',
  b: '-0xf1486aa4c73',
  r: '0x0'
}, {
  a: '0xab9001ec406bdb0',
  b: '-0x22',
  r: '-0x50bc3d23e214a3'
}, {
  a: '0x506f4e3e1e81',
  b: '-0x1edad21',
  r: '-0x29b5cb'
}, {
  a: '-0xb5f506914',
  b: '-0xf8fa731ed8',
  r: '0x0'
}, {
  a: '-0x268672e1d7',
  b: '0xaef0e2232',
  r: '-0x3'
}, {
  a: '-0xb293406dc405481',
  b: '-0x359ef5d30a',
  r: '0x354903'
}, {
  a: '-0xcd63a9ad8e',
  b: '-0x7bb7',
  r: '0x1a901c4'
}, {
  a: '0x8401ba5e00d3',
  b: '0x8052e4',
  r: '0x10758ea'
}, {
  a: '0x874aca57d3d3',
  b: '0xd2010',
  r: '0xa4ecac6'
}, {
  a: '-0x5c7ecd79ee8901f',
  b: '-0x7297028',
  r: '0xcea3ba20'
}, {
  a: '-0x8ecccf7dd33',
  b: '0x2326c5e',
  r: '-0x40ffa'
}, {
  a: '-0x2d47dfb80645',
  b: '0x2832ea',
  r: '-0x1205cf3'
}, {
  a: '-0xd9a5c1702c1',
  b: '-0x2265',
  r: '0x653f5b0f'
}, {
  a: '-0xb78037d39ae18',
  b: '0x454f5e4',
  r: '-0x2a5c4f6'
}, {
  a: '0x3172c54189b1dc',
  b: '0x5336d',
  r: '0x981f75449'
}, {
  a: '-0x45869e12f1dd7dd2',
  b: '0x2d3',
  r: '-0x189e236f296131'
}, {
  a: '-0x9abb40cc384442',
  b: '0xa57b',
  r: '-0xef5f04e0c7'
}, {
  a: '0x34ec11dce',
  b: '0x24f',
  r: '0x16ec89a'
}, {
  a: '0xada1587dd38',
  b: '0xc82de',
  r: '0xde0c3a'
}, {
  a: '0xfa505a19aeae2f8',
  b: '-0x5ad1b2',
  r: '-0x2c195080cc'
}, {
  a: '-0xba2d2fb21',
  b: '-0x74a25fb67c',
  r: '0x0'
}, {
  a: '-0xaa160291a0c7aa',
  b: '-0x44aca8cd88',
  r: '0x27a08'
}, {
  a: '-0x77a2bfcb7b971',
  b: '0xaba77abfe',
  r: '-0xb26b'
}, {
  a: '-0x782fe9035759f11',
  b: '0x7a63a5',
  r: '-0xfb64d818b'
}, {
  a: '-0xa3f2fe524a5e68a',
  b: '0xb69b764cc',
  r: '-0xe5d7cb'
}, {
  a: '0xb20819cd5f1d7',
  b: '0xedd09e',
  r: '0xbfa52fd'
}, {
  a: '-0xdef7136e892',
  b: '0x9b5',
  r: '-0x16f82dae7'
}, {
  a: '0xbb88552d8e9291c',
  b: '-0xa05c7',
  r: '-0x12b605f4ea0'
}, {
  a: '0xc1b09e189b042',
  b: '-0x9486542',
  r: '-0x14dd8fa'
}, {
  a: '-0x1491ac4bf8',
  b: '0x2ca0af',
  r: '-0x75fd'
}, {
  a: '-0x81f46bb35db1ed',
  b: '0x19ae07d910',
  r: '-0x50f82'
}, {
  a: '-0x8cfa05b84',
  b: '-0xe084',
  r: '0xa0bf0'
}, {
  a: '-0xecf7b587ea98d7',
  b: '0xc3284595b',
  r: '-0x136d85'
}, {
  a: '0xf6b2179b5e',
  b: '0xb689c7',
  r: '0x159fa'
}, {
  a: '0xae66973025b0723a',
  b: '0x46a194c9831',
  r: '0x2781bd'
}, {
  a: '0x5d76564ba149d',
  b: '-0xba2493',
  r: '-0x808998f'
}, {
  a: '-0x5514f0e6098b0',
  b: '-0x98eb53dd',
  r: '0x8e6f2'
}, {
  a: '0xa14a51774c31c',
  b: '0x6eec8',
  r: '0x1743d83cf'
}, {
  a: '-0x898d9a2534734b9',
  b: '-0xed7e',
  r: '0x9445ce155bb'
}, {
  a: '0x401d2bbc1361003',
  b: '0x639c2',
  r: '0xa4c64932e6'
}, {
  a: '0x9a72a90c51f',
  b: '-0xb9bb1',
  r: '-0xd4e1b3'
}, {
  a: '-0x2c7c31ec128f130',
  b: '-0xa3d63b472a',
  r: '0x45826'
}, {
  a: '0xf5392c98005ea',
  b: '0x4d3',
  r: '0x32d4eb9a03c'
}, {
  a: '0x4143c06c58220',
  b: '0x27210',
  r: '0x1aafe1815'
}, {
  a: '-0xfc89a79e332',
  b: '-0x38244',
  r: '0x47f8bdb'
}, {
  a: '0x1f1af53b1f69',
  b: '-0x4bd9c',
  r: '-0x68fb6e7'
}, {
  a: '0x92b2a80defc78',
  b: '-0xffa572',
  r: '-0x92e69e9'
}, {
  a: '0xd3c43f9d41',
  b: '0xae0c',
  r: '0x1377b11'
}, {
  a: '0xe0005fdf9f',
  b: '-0x96f8',
  r: '-0x17bd7b9'
}, {
  a: '-0x89c301060666de7f',
  b: '0x2718',
  r: '-0x3861d15a413d2'
}, {
  a: '0xb6610820b8ee5b4',
  b: '0x78f00',
  r: '0x1820f263d97'
}, {
  a: '-0xf2d29cc612a',
  b: '-0x2cf9f',
  r: '0x5661e65'
}, {
  a: '-0xc43e350664',
  b: '-0x8',
  r: '0x1887c6a0cc'
}, {
  a: '-0xf73cc20624',
  b: '0xe8711b4675',
  r: '-0x1'
}, {
  a: '0x3f567f49c939',
  b: '0x84',
  r: '0x7ad64c3202'
}, {
  a: '0xa9c66b448',
  b: '0x772ac67a',
  r: '0x16'
}, {
  a: '-0x262aa6f0a0f',
  b: '0x73da9997',
  r: '-0x545'
}, {
  a: '-0x1b5c3a8328def2d4',
  b: '-0x9fe16aba79',
  r: '0x2bcf23'
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
    const r = d.a / d.b;
    if (d.r !== r) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: /');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a / d.b;
    }
  }
  return Date.now() - t1;
}


function testJsb(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = JSBI.divide(d.a, d.b);
    if (!JSBI.equal(r, d.r)) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: divide');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = JSBI.divide(d.a, d.b);
    }
  }
  return Date.now() - t1;
}


const kRepsBig = 10000;
const kRepsSmall = 30000;

console.log('Native/big:   ' + testNative(dataBigNative, kRepsBig));
console.log('JSB/big:      ' + testJsb(dataBigJsb, kRepsBig));
console.log('Native/small: ' + testNative(dataSmallNative, kRepsSmall));
console.log('JSB/small:    ' + testJsb(dataSmallJsb, kRepsSmall));

if (errorCount !== 0) {
  console.error('Finished with ' + errorCount + ' errors.');
  // Support both d8 (`quit`) and Node.js (`process.exit`).
  (typeof quit !== 'undefined' ? quit : process.exit)(1);
}
