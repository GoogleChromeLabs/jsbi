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
  a: '0xa3ff05d2c909a4c4780c8b9429580d0a086f2d70820110b6ec1d542db6f68789a1d',
  r: '0xa3ff05d2c909a4c4780c8b9429580d0a086f2d70820110b6ec1d542db6f68789a1c'
}, {
  a: '-0x79c186b806657805fa8c6ef9fbc86bfeab6a24ccd',
  r: '-0x79c186b806657805fa8c6ef9fbc86bfeab6a24cce'
}, {
  a: '0x2dee53ce108a58f9068335ee30e530a74c3e9e4c1316972c7e1a1c7802dca',
  r: '0x2dee53ce108a58f9068335ee30e530a74c3e9e4c1316972c7e1a1c7802dc9'
}, {
  a: '-0x80116076950c5aab12a2e12b6f808106166c09e5f18c8626aacb25',
  r: '-0x80116076950c5aab12a2e12b6f808106166c09e5f18c8626aacb26'
}, {
  a: '-0x886dbbbff59b0a0def79cc70e003c728c3f848b07b27c5f4b1e76b38',
  r: '-0x886dbbbff59b0a0def79cc70e003c728c3f848b07b27c5f4b1e76b39'
}, {
  a: '0x346a8c34c5235bd881bd52cf08a2e4d6abcc94c464c0201dc23b8d',
  r: '0x346a8c34c5235bd881bd52cf08a2e4d6abcc94c464c0201dc23b8c'
}, {
  a: '0x8b965e1fdd1a911bd0e1ccd9b1cba84f34b114c7',
  r: '0x8b965e1fdd1a911bd0e1ccd9b1cba84f34b114c6'
}, {
  a: '-0x933e80cb0218b3a0ae08924a8d087f98c5830',
  r: '-0x933e80cb0218b3a0ae08924a8d087f98c5831'
}, {
  a: '-0xa8f72df68cb3d8cc512948e66509b6e0816889e',
  r: '-0xa8f72df68cb3d8cc512948e66509b6e0816889f'
}, {
  a: '0xe5a2c0f4c1e3360070c255e8aeff4de55a8d141c',
  r: '0xe5a2c0f4c1e3360070c255e8aeff4de55a8d141b'
}, {
  a: '-0xc19068955d77e15291cdde063183276f50dcbf68ab34faed827be80690b6cd9fb',
  r: '-0xc19068955d77e15291cdde063183276f50dcbf68ab34faed827be80690b6cd9fc'
}, {
  a: '-0xdd4e2a1deb3750fb4b4870ca8bf039733ce',
  r: '-0xdd4e2a1deb3750fb4b4870ca8bf039733cf'
}, {
  a: '0x51dad841ff357786bd2c50d542aad5633ea54514f4ab574',
  r: '0x51dad841ff357786bd2c50d542aad5633ea54514f4ab573'
}, {
  a: '0x24be7738e68b44c62687699bed292c1756df51d2bad3c1c6da',
  r: '0x24be7738e68b44c62687699bed292c1756df51d2bad3c1c6d9'
}, {
  a: '0x41127cd153dabd106caafd7d8654a2fc35063e893cb8094d38098bebf31',
  r: '0x41127cd153dabd106caafd7d8654a2fc35063e893cb8094d38098bebf30'
}, {
  a: '0x4df20e080eb56d6c0efe653c5b920dc2d967114fe1e78c9627943a66e117f2',
  r: '0x4df20e080eb56d6c0efe653c5b920dc2d967114fe1e78c9627943a66e117f1'
}, {
  a: '-0x51b3f273df38735e2a1183109217c5bc31944bda424588ba8c6ecbc8e8a',
  r: '-0x51b3f273df38735e2a1183109217c5bc31944bda424588ba8c6ecbc8e8b'
}, {
  a: '-0x6aaec7a7ab819fcad7832da64c236af77d2228f3dbca1dea55721f4e',
  r: '-0x6aaec7a7ab819fcad7832da64c236af77d2228f3dbca1dea55721f4f'
}, {
  a: '0x4b16cc3dbbcad105a82f830c8211af7a3f97b570de9c38445',
  r: '0x4b16cc3dbbcad105a82f830c8211af7a3f97b570de9c38444'
}, {
  a: '0x448b5e487f136bce79ee76f6e1a7980d1e3936733b0cf9fd2d6c82dc42ad283aa994',
  r: '0x448b5e487f136bce79ee76f6e1a7980d1e3936733b0cf9fd2d6c82dc42ad283aa993'
}, {
  a: '-0xc0a3870dbbfcec3ea2965b677fd1fc3e50448a',
  r: '-0xc0a3870dbbfcec3ea2965b677fd1fc3e50448b'
}, {
  a: '-0x82f63017bb20ce8f9ffa87641aed2f679d82362c4801b9f80',
  r: '-0x82f63017bb20ce8f9ffa87641aed2f679d82362c4801b9f81'
}, {
  a: '-0xb6e964b63e5267b996b4b2757df2cb5da55b6638d84cfeb9d1a03c0d18f729ed11200c',
  r: '-0xb6e964b63e5267b996b4b2757df2cb5da55b6638d84cfeb9d1a03c0d18f729ed11200d'
}, {
  a: '-0x984025bfac89d5b8027b550b38da136d87f921e78ea9ba68ec4cb59706ae303a985',
  r: '-0x984025bfac89d5b8027b550b38da136d87f921e78ea9ba68ec4cb59706ae303a986'
}, {
  a: '0xe2eda2fc34ff8f64e268e51c454df13fe8e70a',
  r: '0xe2eda2fc34ff8f64e268e51c454df13fe8e709'
}, {
  a: '0x257803606a041006aa4cafc7b007b150c2b894f5df752362706514709e729dae4f8a3',
  r: '0x257803606a041006aa4cafc7b007b150c2b894f5df752362706514709e729dae4f8a2'
}, {
  a: '0x472d9c3211350fa81cd7d61c4244439da8e2f785f81f01c47f372f12',
  r: '0x472d9c3211350fa81cd7d61c4244439da8e2f785f81f01c47f372f11'
}, {
  a: '0xe6078af63b43435465eb6c20dfa4e8a82d9728d25313282f0',
  r: '0xe6078af63b43435465eb6c20dfa4e8a82d9728d25313282ef'
}, {
  a: '0xff4ee04ea09d08320eec66c20ed5877e52887fd347aed1',
  r: '0xff4ee04ea09d08320eec66c20ed5877e52887fd347aed0'
}, {
  a: '0xf8cd490f227b38dc8a73282569e6164add6d5085280b',
  r: '0xf8cd490f227b38dc8a73282569e6164add6d5085280a'
}, {
  a: '0x12147bf3b137882d402e042c546ca053503ea47c708011465c57e7ad0bf849a1',
  r: '0x12147bf3b137882d402e042c546ca053503ea47c708011465c57e7ad0bf849a0'
}, {
  a: '0x97e35e24b65e48e89919698391517b0aef3d',
  r: '0x97e35e24b65e48e89919698391517b0aef3c'
}, {
  a: '-0x729c14f1cdfde7385ec4cf39a11921bd5ae',
  r: '-0x729c14f1cdfde7385ec4cf39a11921bd5af'
}, {
  a: '-0xa7d09a2d32aef6600041fa06e8d2841dbc93b79ce020afce68dbf38480c48c',
  r: '-0xa7d09a2d32aef6600041fa06e8d2841dbc93b79ce020afce68dbf38480c48d'
}, {
  a: '-0xd9b41e30eec89fbb0ffee84f8d30c7f000590fc8f03820015b8ac652df56d3',
  r: '-0xd9b41e30eec89fbb0ffee84f8d30c7f000590fc8f03820015b8ac652df56d4'
}, {
  a: '-0x6e1c56241d3758db75b806d8adfcee75eefa263e80e804a7100a',
  r: '-0x6e1c56241d3758db75b806d8adfcee75eefa263e80e804a7100b'
}, {
  a: '-0x15ae81a02197c36d9524ccd462d0eda8959dad',
  r: '-0x15ae81a02197c36d9524ccd462d0eda8959dae'
}, {
  a: '0x212006ec3d8585d5a9132db1299258d8693c1fdf15bb',
  r: '0x212006ec3d8585d5a9132db1299258d8693c1fdf15ba'
}, {
  a: '-0x6950f671ee575818888bafd128f1a79b9213f82319cd51d1524027a78c78a06',
  r: '-0x6950f671ee575818888bafd128f1a79b9213f82319cd51d1524027a78c78a07'
}, {
  a: '-0x5f381c990c4077bc513e99d7f75ce8ae152b6',
  r: '-0x5f381c990c4077bc513e99d7f75ce8ae152b7'
}, {
  a: '-0xf6897ee6ce9827b7b0e7bac6d71264b670a',
  r: '-0xf6897ee6ce9827b7b0e7bac6d71264b670b'
}, {
  a: '-0xb35a3786040386c3e25d0c11c6145bd01923fbe97',
  r: '-0xb35a3786040386c3e25d0c11c6145bd01923fbe98'
}, {
  a: '-0xb598838451013ddd6a8ff97af3e9d396c5df8fb3b31a88a00ef38',
  r: '-0xb598838451013ddd6a8ff97af3e9d396c5df8fb3b31a88a00ef39'
}, {
  a: '0x660c1e8eb39c3bfd7d541b44b372611a1d56c5f8c8a54235daf5',
  r: '0x660c1e8eb39c3bfd7d541b44b372611a1d56c5f8c8a54235daf4'
}, {
  a: '-0x579f618f3f96a9b859987e13fa164441dcccb0335a068a9507357f69dfde62',
  r: '-0x579f618f3f96a9b859987e13fa164441dcccb0335a068a9507357f69dfde63'
}, {
  a: '0xede2f7f7a33e7631cb361e4db286bf7b4aa201c9da9d8733',
  r: '0xede2f7f7a33e7631cb361e4db286bf7b4aa201c9da9d8732'
}, {
  a: '0x3abba63c693dfd78be041750a616abac31670d48ae6c1b4d5fdfa402da3cf8339',
  r: '0x3abba63c693dfd78be041750a616abac31670d48ae6c1b4d5fdfa402da3cf8338'
}, {
  a: '0x791ee245f80f3e385f8998d4fb22cad7ba51ba0681017fd8de3931524',
  r: '0x791ee245f80f3e385f8998d4fb22cad7ba51ba0681017fd8de3931523'
}, {
  a: '-0x16df754370d79939930ae7bb99ed89dfb365709379b636d83b706dda',
  r: '-0x16df754370d79939930ae7bb99ed89dfb365709379b636d83b706ddb'
}, {
  a: '0xa0c7cb1f8078e17fbbb0729182dd99dd32ab424ccc4d61',
  r: '0xa0c7cb1f8078e17fbbb0729182dd99dd32ab424ccc4d60'
}, {
  a: '0x2a5ea3404f53e64ab7e182f739caea5e8d642469688145c3a7e',
  r: '0x2a5ea3404f53e64ab7e182f739caea5e8d642469688145c3a7d'
}, {
  a: '0x867aaa078731b75e2161a1df3593a7cbf77e4591f2f6d5f82adace0de921b',
  r: '0x867aaa078731b75e2161a1df3593a7cbf77e4591f2f6d5f82adace0de921a'
}, {
  a: '-0xa59b1efabcbbcf0d34e78e649e2334fe1cf45faa995bb064',
  r: '-0xa59b1efabcbbcf0d34e78e649e2334fe1cf45faa995bb065'
}, {
  a: '0x1e1d1ee996a656077d4c602f83b281ccc8e5987bab2fc4b0f1e',
  r: '0x1e1d1ee996a656077d4c602f83b281ccc8e5987bab2fc4b0f1d'
}, {
  a: '-0x3e327e78d6c685a52566ce878b58480c6ea5467a1b135073d1',
  r: '-0x3e327e78d6c685a52566ce878b58480c6ea5467a1b135073d2'
}, {
  a: '0x7a1636c35c04f21211c04d06586c115a60a5e924f8468d5b6bf',
  r: '0x7a1636c35c04f21211c04d06586c115a60a5e924f8468d5b6be'
}, {
  a: '0xfd26527d19d8d5118f400b93dc01382b2eb7',
  r: '0xfd26527d19d8d5118f400b93dc01382b2eb6'
}, {
  a: '-0xe8bacb5e51ae9707006f038ace8a231026343c860a91decf1aaad0380c988953',
  r: '-0xe8bacb5e51ae9707006f038ace8a231026343c860a91decf1aaad0380c988954'
}, {
  a: '0x8898f7fe5861b14ee744b74a45a67e8f6c5eb0d362b0b7f35d874569b578c2366f',
  r: '0x8898f7fe5861b14ee744b74a45a67e8f6c5eb0d362b0b7f35d874569b578c2366e'
}, {
  a: '-0xbd7929b87c847d3ea4a6be0a27dcc09a0ff923aeab26a0eb',
  r: '-0xbd7929b87c847d3ea4a6be0a27dcc09a0ff923aeab26a0ec'
}, {
  a: '-0x2dc7d718a71f06fa34a5af5976432a4229875dc54a3038927b8ce37cf35',
  r: '-0x2dc7d718a71f06fa34a5af5976432a4229875dc54a3038927b8ce37cf36'
}, {
  a: '0xf70812cda8485cf805c1c950392fd2f20fc78a6caaa2e2ff9d912dd7e1c70e2472985',
  r: '0xf70812cda8485cf805c1c950392fd2f20fc78a6caaa2e2ff9d912dd7e1c70e2472984'
}, {
  a: '-0x741bd14ebe0549c7a0f543bf509509fd0794c4bfcf2fe',
  r: '-0x741bd14ebe0549c7a0f543bf509509fd0794c4bfcf2ff'
}, {
  a: '0xf386fcdbfd6e67f20e6cf4352285cf08504773',
  r: '0xf386fcdbfd6e67f20e6cf4352285cf08504772'
}, {
  a: '-0xc01ecdd2b0cbb0c2d3774b3306771f1be60229f535872ea43b24a76a721d',
  r: '-0xc01ecdd2b0cbb0c2d3774b3306771f1be60229f535872ea43b24a76a721e'
}, {
  a: '0x6861ac9d30f115265db400764d0e8ad86043a0b89cd3e70',
  r: '0x6861ac9d30f115265db400764d0e8ad86043a0b89cd3e6f'
}, {
  a: '0x3dea81248584903f7f470c28a048c5528349c4d298a566f472d7c6010516',
  r: '0x3dea81248584903f7f470c28a048c5528349c4d298a566f472d7c6010515'
}, {
  a: '-0x8ac7e7e3dadd936a712b0b283f60e4b94b053e4b4d3',
  r: '-0x8ac7e7e3dadd936a712b0b283f60e4b94b053e4b4d4'
}, {
  a: '-0x8a350c52f37f3a5a311869e475761b54816122bf99d22',
  r: '-0x8a350c52f37f3a5a311869e475761b54816122bf99d23'
}, {
  a: '0x90e69baf44e8f149ec76c9fff885bdd041313a7d91f28',
  r: '0x90e69baf44e8f149ec76c9fff885bdd041313a7d91f27'
}, {
  a: '-0x748e71b62475b26b55e606462ff220043de5ea60628afb9ff7e',
  r: '-0x748e71b62475b26b55e606462ff220043de5ea60628afb9ff7f'
}, {
  a: '0xbe9ada0758e8b2b4b0beef4e90d3e70fa59d3b26707e7f73ec858f0fc3f217131d8cb',
  r: '0xbe9ada0758e8b2b4b0beef4e90d3e70fa59d3b26707e7f73ec858f0fc3f217131d8ca'
}, {
  a: '-0x4ba37a8091e7822bb91246b7c051227b8a284fd',
  r: '-0x4ba37a8091e7822bb91246b7c051227b8a284fe'
}, {
  a: '0xb4b42a2e485ca11b8d70c5bd03e0805750a8858b68',
  r: '0xb4b42a2e485ca11b8d70c5bd03e0805750a8858b67'
}, {
  a: '0xbd1c68b483346954ec3ccbf6ce1b826b973b854',
  r: '0xbd1c68b483346954ec3ccbf6ce1b826b973b853'
}, {
  a: '0x8f0742a5b0631e30d49a5341d3606d4204f03741ebe209eec45a9bdb6cc',
  r: '0x8f0742a5b0631e30d49a5341d3606d4204f03741ebe209eec45a9bdb6cb'
}, {
  a: '0x10e6346980b9399151dd7ac8a369546284b',
  r: '0x10e6346980b9399151dd7ac8a369546284a'
}, {
  a: '-0xac7ae89e9038818f9cc34c14e88b4d12523f6be866099470f',
  r: '-0xac7ae89e9038818f9cc34c14e88b4d12523f6be8660994710'
}, {
  a: '0x73ab03bec74deb198864a10b9a69a092f9b4baefbf98ee12e70ba52eafe',
  r: '0x73ab03bec74deb198864a10b9a69a092f9b4baefbf98ee12e70ba52eafd'
}, {
  a: '-0x1cd1d0f9c1e5e020fd6e733112b7caa2ee174d5d87d59b75',
  r: '-0x1cd1d0f9c1e5e020fd6e733112b7caa2ee174d5d87d59b76'
}, {
  a: '-0xe0a679a0551e16a263c1d4057dd3ad768267ccf3c3cdb7588067476',
  r: '-0xe0a679a0551e16a263c1d4057dd3ad768267ccf3c3cdb7588067477'
}, {
  a: '0x62999e4f9d5b74534a5ad34a3edda55a40ed16cfbf06be10',
  r: '0x62999e4f9d5b74534a5ad34a3edda55a40ed16cfbf06be0f'
}, {
  a: '0x21c4abfb6fbde6f724d4cb738b7d263b86190f65',
  r: '0x21c4abfb6fbde6f724d4cb738b7d263b86190f64'
}, {
  a: '-0x8857fe99e7c396d4de78b5929f68ec9b490728bbbfda3e4cd4b5f439e95',
  r: '-0x8857fe99e7c396d4de78b5929f68ec9b490728bbbfda3e4cd4b5f439e96'
}, {
  a: '0x9376d9c6d464c3f49351500578c720b77cd3b1e142c6a06915479f8d8aeba3600',
  r: '0x9376d9c6d464c3f49351500578c720b77cd3b1e142c6a06915479f8d8aeba35ff'
}, {
  a: '-0x9a3d25295186cf11c2f8bc45349c2ec5fe9e7d089ed69d32dfeb3e6feee2f4584886',
  r: '-0x9a3d25295186cf11c2f8bc45349c2ec5fe9e7d089ed69d32dfeb3e6feee2f4584887'
}, {
  a: '-0x11c9030d600f976e08158e9f280be256e5afedcea2e9b91',
  r: '-0x11c9030d600f976e08158e9f280be256e5afedcea2e9b92'
}, {
  a: '-0x98b382b297f9624ee7a6b25f476875d78fd2ffb3e7d4',
  r: '-0x98b382b297f9624ee7a6b25f476875d78fd2ffb3e7d5'
}, {
  a: '0xe5d759f0149e8795f98997898afadd10f7e0068bbd52',
  r: '0xe5d759f0149e8795f98997898afadd10f7e0068bbd51'
}, {
  a: '-0xb8f4549a65005a2ebb89c04196fe9d18185fa5c7f87b6acab859fcb3ed40bb68',
  r: '-0xb8f4549a65005a2ebb89c04196fe9d18185fa5c7f87b6acab859fcb3ed40bb69'
}, {
  a: '-0xbe4a908e608457fc5c35fef92b0769bb449e9dcf66f5',
  r: '-0xbe4a908e608457fc5c35fef92b0769bb449e9dcf66f6'
}, {
  a: '-0x5f56cc352c19cdb41e8b080297c5294e6206733adfb',
  r: '-0x5f56cc352c19cdb41e8b080297c5294e6206733adfc'
}, {
  a: '-0x4b28b4ac4e2ac26f5a9d77dc405a107e0983080a',
  r: '-0x4b28b4ac4e2ac26f5a9d77dc405a107e0983080b'
}, {
  a: '0x51f1e1da75d6477cf7649506da610eb55dd682e6f3',
  r: '0x51f1e1da75d6477cf7649506da610eb55dd682e6f2'
}, {
  a: '0xfe7d0d072a0e42d545ee0d163258620c09eae10f96e483028e6ca88b4c67',
  r: '0xfe7d0d072a0e42d545ee0d163258620c09eae10f96e483028e6ca88b4c66'
}, {
  a: '0x70a960b6e17d725ce56e6f084f86506caa8d',
  r: '0x70a960b6e17d725ce56e6f084f86506caa8c'
}, {
  a: '-0x5db7e16adbe4c5712a415b83c41afdc2d696e10c5f2f2c1',
  r: '-0x5db7e16adbe4c5712a415b83c41afdc2d696e10c5f2f2c2'
}, {
  a: '-0xd876968edfa00c4ec08f2a94c0fbd86dc818e454f5a94c2f',
  r: '-0xd876968edfa00c4ec08f2a94c0fbd86dc818e454f5a94c30'
}, {
  a: '-0x61293226b87974c73003c7b84b0a71db2a22e731eaebee19',
  r: '-0x61293226b87974c73003c7b84b0a71db2a22e731eaebee1a'
}, {
  a: '-0x2411eaed294caef0620a8fbcb430abf7137a638dc7789fa0',
  r: '-0x2411eaed294caef0620a8fbcb430abf7137a638dc7789fa1'
}];

const dataSmall = [{
  a: '0xe4232e',
  r: '0xe4232d'
}, {
  a: '0x8a63',
  r: '0x8a62'
}, {
  a: '-0x250',
  r: '-0x251'
}, {
  a: '-0x21a56',
  r: '-0x21a57'
}, {
  a: '-0xf957ff7',
  r: '-0xf957ff8'
}, {
  a: '-0x612bd45',
  r: '-0x612bd46'
}, {
  a: '-0xaa9afc',
  r: '-0xaa9afd'
}, {
  a: '-0xf0b744468066a',
  r: '-0xf0b744468066b'
}, {
  a: '0xd948edd',
  r: '0xd948edc'
}, {
  a: '0x0',
  r: '-0x1'
}, {
  a: '-0xae11',
  r: '-0xae12'
}, {
  a: '-0xa85b0c47',
  r: '-0xa85b0c48'
}, {
  a: '-0x4e1eae2386036',
  r: '-0x4e1eae2386037'
}, {
  a: '0xd30eb95',
  r: '0xd30eb94'
}, {
  a: '0x45b',
  r: '0x45a'
}, {
  a: '-0xf8c9bfa42ce73d3',
  r: '-0xf8c9bfa42ce73d4'
}, {
  a: '-0x2b296',
  r: '-0x2b297'
}, {
  a: '0x3c767906cd',
  r: '0x3c767906cc'
}, {
  a: '0x56372447ade',
  r: '0x56372447add'
}, {
  a: '0x81c10',
  r: '0x81c0f'
}, {
  a: '0xcb0a2ff01606fdb',
  r: '0xcb0a2ff01606fda'
}, {
  a: '0x17d46227',
  r: '0x17d46226'
}, {
  a: '0x4ae635b2f',
  r: '0x4ae635b2e'
}, {
  a: '0x4896932dd84',
  r: '0x4896932dd83'
}, {
  a: '-0x823d318e4595ef6b',
  r: '-0x823d318e4595ef6c'
}, {
  a: '0x7476117d86',
  r: '0x7476117d85'
}, {
  a: '-0x1dec6c4e39c86d1e',
  r: '-0x1dec6c4e39c86d1f'
}, {
  a: '0x23aaddbd1e0',
  r: '0x23aaddbd1df'
}, {
  a: '0x0',
  r: '-0x1'
}, {
  a: '0x524fb',
  r: '0x524fa'
}, {
  a: '-0x71e8fceef940ed',
  r: '-0x71e8fceef940ee'
}, {
  a: '-0x914a076bb9ed',
  r: '-0x914a076bb9ee'
}, {
  a: '-0xb73442d8ad623bc2',
  r: '-0xb73442d8ad623bc3'
}, {
  a: '0xc',
  r: '0xb'
}, {
  a: '-0xa66756849',
  r: '-0xa6675684a'
}, {
  a: '0x4197',
  r: '0x4196'
}, {
  a: '0x5',
  r: '0x4'
}, {
  a: '0xf6c',
  r: '0xf6b'
}, {
  a: '0x0',
  r: '-0x1'
}, {
  a: '0xa241542e201f1b',
  r: '0xa241542e201f1a'
}, {
  a: '-0x40a54b41925ded6',
  r: '-0x40a54b41925ded7'
}, {
  a: '0x3fd8a3a1a',
  r: '0x3fd8a3a19'
}, {
  a: '-0x9b',
  r: '-0x9c'
}, {
  a: '-0x2',
  r: '-0x3'
}, {
  a: '-0xb3aea53545',
  r: '-0xb3aea53546'
}, {
  a: '-0xa5b7d2b0',
  r: '-0xa5b7d2b1'
}, {
  a: '-0x315bc4b5',
  r: '-0x315bc4b6'
}, {
  a: '0x4d9704d4',
  r: '0x4d9704d3'
}, {
  a: '0x0',
  r: '-0x1'
}, {
  a: '-0x8854436169a230',
  r: '-0x8854436169a231'
}, {
  a: '0xbf0ddd4d65',
  r: '0xbf0ddd4d64'
}, {
  a: '0xdcee',
  r: '0xdced'
}, {
  a: '-0xf382d1ad4e524',
  r: '-0xf382d1ad4e525'
}, {
  a: '0xe93a079f',
  r: '0xe93a079e'
}, {
  a: '0x2d001ba',
  r: '0x2d001b9'
}, {
  a: '-0x4035b8c6a3e',
  r: '-0x4035b8c6a3f'
}, {
  a: '0x6',
  r: '0x5'
}, {
  a: '0x9aa8768a6bb7',
  r: '0x9aa8768a6bb6'
}, {
  a: '-0xed9d',
  r: '-0xed9e'
}, {
  a: '-0x8cbb977d41225093',
  r: '-0x8cbb977d41225094'
}, {
  a: '0xb0265af72',
  r: '0xb0265af71'
}, {
  a: '-0x41019e1de54a1f7',
  r: '-0x41019e1de54a1f8'
}, {
  a: '0xa663',
  r: '0xa662'
}, {
  a: '0xdd9fa98d',
  r: '0xdd9fa98c'
}, {
  a: '0x7bc',
  r: '0x7bb'
}, {
  a: '-0xd2d35a2b119b6',
  r: '-0xd2d35a2b119b7'
}, {
  a: '-0x9843d0abd9',
  r: '-0x9843d0abda'
}, {
  a: '-0x75de84',
  r: '-0x75de85'
}, {
  a: '-0xd56bb1f095191',
  r: '-0xd56bb1f095192'
}, {
  a: '-0x6363c00127d',
  r: '-0x6363c00127e'
}, {
  a: '0xa1485',
  r: '0xa1484'
}, {
  a: '0x0',
  r: '-0x1'
}, {
  a: '-0xca39cab65dda7',
  r: '-0xca39cab65dda8'
}, {
  a: '-0x26',
  r: '-0x27'
}, {
  a: '0xd3effeae',
  r: '0xd3effead'
}, {
  a: '-0x2',
  r: '-0x3'
}, {
  a: '-0x2a9784d',
  r: '-0x2a9784e'
}, {
  a: '-0xf3efc06dc',
  r: '-0xf3efc06dd'
}, {
  a: '0xbd8',
  r: '0xbd7'
}, {
  a: '0x8937269225e5f',
  r: '0x8937269225e5e'
}, {
  a: '0x5c5150',
  r: '0x5c514f'
}, {
  a: '-0xcce85997c41535c',
  r: '-0xcce85997c41535d'
}, {
  a: '0xe5289dc632',
  r: '0xe5289dc631'
}, {
  a: '0xe1b3fc1',
  r: '0xe1b3fc0'
}, {
  a: '-0x931a96bf5',
  r: '-0x931a96bf6'
}, {
  a: '-0x7481d586b6',
  r: '-0x7481d586b7'
}, {
  a: '-0x9e2a6',
  r: '-0x9e2a7'
}, {
  a: '-0x91a8a50d',
  r: '-0x91a8a50e'
}, {
  a: '-0x3ce3789',
  r: '-0x3ce378a'
}, {
  a: '-0x1e7670',
  r: '-0x1e7671'
}, {
  a: '-0xdce',
  r: '-0xdcf'
}, {
  a: '-0xc744ca2cfe5c87',
  r: '-0xc744ca2cfe5c88'
}, {
  a: '0x63cc876c18328',
  r: '0x63cc876c18327'
}, {
  a: '-0xecafa5',
  r: '-0xecafa6'
}, {
  a: '0x1',
  r: '0x0'
}, {
  a: '0xce5f1',
  r: '0xce5f0'
}, {
  a: '0x6691f29bfef4',
  r: '0x6691f29bfef3'
}, {
  a: '0xc2c4',
  r: '0xc2c3'
}, {
  a: '0x626de86733ff99e3',
  r: '0x626de86733ff99e2'
}, {
  a: '-0xf231c94a65d',
  r: '-0xf231c94a65e'
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
    let r = d.a; r = --r;
    if (d.r !== r) {
      console.log('Input:    ' + d.a.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: --');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a; r = --r;
    }
  }
  return Date.now() - t1;
}


function testJsb(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = d.a.decrement();
    if (!r.equal(d.r)) {
      console.log('Input:    ' + d.a.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: decrement');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a.decrement();
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
