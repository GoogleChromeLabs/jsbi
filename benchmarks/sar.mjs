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
  a: '-0xe736bcb93d94ce0272808bbb4638829cb5699adac5244a33eb4ff40745edebcc7c',
  b: '0xf',
  r: '-0x1ce6d79727b299c04e50117768c7105396ad335b58a489467d69fe80e8bdbd8'
}, {
  a: '-0x69f7f34ea59ee548b71bd9ee6cc7951cecae48ae67c4b2fdf05bc836ff7a7',
  b: '0x8bd',
  r: '-0x1'
}, {
  a: '0x96d94cc8268fc3f73964',
  b: '0x7d',
  r: '0x0'
}, {
  a: '0x1e7943cdb620ecfc793a8cf4ecadbc8e',
  b: '0x0',
  r: '0x1e7943cdb620ecfc793a8cf4ecadbc8e'
}, {
  a: '0x874161c8197fd433409d78a35100826b40eddcf2ea',
  b: '0x47',
  r: '0x10e82c39032ffa866813af146'
}, {
  a: '0x315f2e1bbfcdcaaea78368ebd126cf61a6810acd8ea55f0c647a392d88b1ab',
  b: '-0x7',
  r: '0x18af970ddfe6e55753c1b475e89367b0d3408566c752af86323d1c96c458d580'
}, {
  a: '-0xdf8d6ea2e36791e2f4fa7cf08ae',
  b: '-0x12',
  r: '-0x37e35ba8b8d9e478bd3e9f3c22b80000'
}, {
  a: '0xe7eb33e3e0011',
  b: '0x157',
  r: '0x0'
}, {
  a: '-0x704cd13212805e2362306f7109f66c57ec3c74cc2e417d337ddefc3d167',
  b: '0x547',
  r: '-0x1'
}, {
  a: '0xbd30243311e44583a4c8439f1172d3956d26efcebedb0f6f505b520da',
  b: '-0xb',
  r: '0x5e98121988f222c1d26421cf88b969cab69377e75f6d87b7a82da906d000'
}, {
  a: '0x992746ada641994722c2f223f86d7ea0325ad6a675',
  b: '0x0',
  r: '0x992746ada641994722c2f223f86d7ea0325ad6a675'
}, {
  a: '-0x3b4cd904339286675d2f3e3f3353e70e9c22ba7fb6',
  b: '-0x6d',
  r: '-0x7699b20867250cceba5e7c7e66a7ce1d384574ff6c000000000000000000000000000'
}, {
  a: '0x6097f545ac5f56',
  b: '0xe7',
  r: '0x0'
}, {
  a: '0xc58fe6ec17c7f3865b49b3e5879eb8cafb150acb0dca51e0b',
  b: '0x0',
  r: '0xc58fe6ec17c7f3865b49b3e5879eb8cafb150acb0dca51e0b'
}, {
  a: '-0x120d54ded33839625f99d783d',
  b: '0xf',
  r: '-0x241aa9bda67072c4bf33b'
}, {
  a: '-0xbb698a19539cca54bbbcd3f7eedf84c6bdfb5f89e84ee872f3f042235',
  b: '0x57',
  r: '-0x176d31432a73994a97779a7efddbf098d7c0'
}, {
  a: '-0x1',
  b: '0x3',
  r: '-0x1'
}, {
  a: '0xd2eff1f48c1f12c8594e22cabd',
  b: '-0x75',
  r: '0x1a5dfe3e9183e2590b29c45957a00000000000000000000000000000'
}, {
  a: '0xacd515f6a4cffb3851fce816ffa4f99b8b9caad75cc4acbde8ea6',
  b: '-0xf8',
  r: '0xacd515f6a4cffb3851fce816ffa4f99b8b9caad75cc4acbde8ea600000000000000000000000000000000000000000000000000000000000000'
}, {
  a: '0xceb51ab6e16ab510772a',
  b: '-0x2c',
  r: '0xceb51ab6e16ab510772a00000000000'
}, {
  a: '-0x9791278d5501a974b7a054e2b1ecdd2eee30af1fc06030e40ea1eabe6ca',
  b: '0x6',
  r: '-0x25e449e355406a5d2de81538ac7b374bbb8c2bc7f0180c3903a87aaf9c'
}, {
  a: '-0x6ddace23367b6dae',
  b: '0xb57',
  r: '-0x1'
}, {
  a: '0xcc6b19f9b77a8eb066f',
  b: '0xb',
  r: '0x198d633f36ef51d60'
}, {
  a: '-0x90240f1137d3f',
  b: '-0x83',
  r: '-0x481207889be9f800000000000000000000000000000000'
}, {
  a: '0x5d5c2b2f15c113a030b6e98eae0634c',
  b: '-0x9d',
  r: '0xbab8565e2b822740616dd31d5c0c698000000000000000000000000000000000000000'
}, {
  a: '-0x241d024647b6732b143157b',
  b: '-0xe4',
  r: '-0x241d024647b6732b143157b000000000000000000000000000000000000000000000000000000000'
}, {
  a: '-0xa14aa9cce6dde9fe384e36c913d767a8987aafe016d1c403fc3233ec671f9e7',
  b: '0x0',
  r: '-0xa14aa9cce6dde9fe384e36c913d767a8987aafe016d1c403fc3233ec671f9e7'
}, {
  a: '-0xb43a',
  b: '0x4',
  r: '-0xb44'
}, {
  a: '0xd2d35085f3a9d999c0533e8064a0a4444c1a10e8a884f0203cc0f31a4d7',
  b: '0x0',
  r: '0xd2d35085f3a9d999c0533e8064a0a4444c1a10e8a884f0203cc0f31a4d7'
}, {
  a: '0xd45f2d497dae9188cb58ecc52fb352f0c6a8f768b78676da6e983e9d900af13ba38',
  b: '-0xd',
  r: '0x1a8be5a92fb5d231196b1d98a5f66a5e18d51eed16f0cedb4dd307d3b2015e277470000'
}, {
  a: '-0x2f3ecd77711d75134e4c',
  b: '-0x60',
  r: '-0x2f3ecd77711d75134e4c000000000000000000000000'
}, {
  a: '0x98bc9926bd1cd65d141898e1439e1f6e6342fe75c032353dc9161129b2d05d6c555d',
  b: '0xc',
  r: '0x98bc9926bd1cd65d141898e1439e1f6e6342fe75c032353dc9161129b2d05d6c5'
}, {
  a: '0xc808767654dc5be44dbce92b0ee3542dfd02f5d88954',
  b: '-0xa5',
  r: '0x19010ececa9b8b7c89b79d2561dc6a85bfa05ebb112a800000000000000000000000000000000000000000'
}, {
  a: '0x613d7fcb86b8e24414cd0068433c6a',
  b: '-0x30',
  r: '0x613d7fcb86b8e24414cd0068433c6a000000000000'
}, {
  a: '-0x94a2e6e155a11a4955946ed5b53e4f7702',
  b: '-0x8b',
  r: '-0x4a517370aad08d24aaca376ada9f27bb8100000000000000000000000000000000000'
}, {
  a: '0xf168e8fe533ab42',
  b: '-0x97',
  r: '0x78b4747f299d5a100000000000000000000000000000000000000'
}, {
  a: '0xcd13917e8df596ec3ff9edc77b64c91eb7',
  b: '-0x78',
  r: '0xcd13917e8df596ec3ff9edc77b64c91eb7000000000000000000000000000000'
}, {
  a: '0x67180fa826346b7473e8d17e78bf542fdb',
  b: '0x0',
  r: '0x67180fa826346b7473e8d17e78bf542fdb'
}, {
  a: '-0x31',
  b: '-0xc0',
  r: '-0x31000000000000000000000000000000000000000000000000'
}, {
  a: '-0x6046f2d1a310d57b1cf35472d57d2c4f26cbb0b546e61c43b88ef3058fe',
  b: '-0x7',
  r: '-0x30237968d1886abd8e79aa396abe96279365d85aa3730e21dc477982c7f00'
}, {
  a: '0xfb2eaf731cfb41222044384a703b5c68b2',
  b: '0x0',
  r: '0xfb2eaf731cfb41222044384a703b5c68b2'
}, {
  a: '0x0',
  b: '-0x9e',
  r: '0x0'
}, {
  a: '0x5743a5075e80a88e78d5aafe556553d',
  b: '-0x64',
  r: '0x5743a5075e80a88e78d5aafe556553d0000000000000000000000000'
}, {
  a: '-0x2d1722d6e36ff9e4a698313bbbabbaad2da8b9a1a7',
  b: '-0x3c',
  r: '-0x2d1722d6e36ff9e4a698313bbbabbaad2da8b9a1a7000000000000000'
}, {
  a: '0xdab8c06c9e113752241e4cf0ee6cef491d37024015282c4ad4ef06162e1',
  b: '0xf',
  r: '0x1b57180d93c226ea4483c99e1dcd9de923a6e04802a505895a9de0c2'
}, {
  a: '0xb80b749fe5dcbe5e73f',
  b: '-0x52',
  r: '0x2e02dd27f9772f979cfc00000000000000000000'
}, {
  a: '0x551e10b103ff405ad',
  b: '-0xfb',
  r: '0x2a8f085881ffa02d6800000000000000000000000000000000000000000000000000000000000000'
}, {
  a: '-0xb282aa73a42ba77f60f0204731b',
  b: '0xf7f',
  r: '-0x1'
}, {
  a: '0xc922f2',
  b: '0x8',
  r: '0xc922'
}, {
  a: '-0xf11dabe19780b194594e406b5ff264bbb017f317a9804f11566139961',
  b: '-0xd',
  r: '-0x1e23b57c32f016328b29c80d6bfe4c977602fe62f53009e22acc2732c2000'
}, {
  a: '-0xc7a288710a44dce224121041952dd2',
  b: '-0x14',
  r: '-0xc7a288710a44dce224121041952dd200000'
}, {
  a: '0xfdb95e199d24eabd765958443c1f2ba7458aab07ade71ee68',
  b: '-0xee',
  r: '0x3f6e578667493aaf5d9656110f07cae9d162aac1eb79c7b9a000000000000000000000000000000000000000000000000000000000000'
}, {
  a: '0xfef4cd502d984a0f136d02091d6f8d1c0b933e51c11baf5bc363a05e',
  b: '-0x6',
  r: '0x3fbd33540b661283c4db4082475be34702e4cf947046ebd6f0d8e81780'
}, {
  a: '0xc1376b794d472f3bdd3595ba9c5666b8',
  b: '0x0',
  r: '0xc1376b794d472f3bdd3595ba9c5666b8'
}, {
  a: '0xb2fe5cd7489ab14e56c8cfdf8df9e',
  b: '-0xe0',
  r: '0xb2fe5cd7489ab14e56c8cfdf8df9e00000000000000000000000000000000000000000000000000000000'
}, {
  a: '-0x4924db9102a45b272da81b05061b5',
  b: '-0x2f',
  r: '-0x24926dc881522d9396d40d82830da800000000000'
}, {
  a: '-0x841f0bd6a4cf00b29334e392015ac1f9968e8c82ae56e36a2b2a3ab72b2',
  b: '-0x8',
  r: '-0x841f0bd6a4cf00b29334e392015ac1f9968e8c82ae56e36a2b2a3ab72b200'
}, {
  a: '0x8b67831f8b7057986215',
  b: '-0x41',
  r: '0x116cf063f16e0af30c42a0000000000000000'
}, {
  a: '0x5c4e8ab43f202ca6a7478b9bdeea3a80d597c7a2b6b9bbdd00e9b1b',
  b: '0x0',
  r: '0x5c4e8ab43f202ca6a7478b9bdeea3a80d597c7a2b6b9bbdd00e9b1b'
}, {
  a: '0xd6c3f5f460b77af0facde7852037dfae74211f703bd3580fec7a3',
  b: '0x4a3',
  r: '0x0'
}, {
  a: '0xdf3bb17dd1025323b32',
  b: '-0x8d',
  r: '0x1be7762fba204a64766400000000000000000000000000000000000'
}, {
  a: '0x5530f8078378a9cd857b67086cbe131c4ca73d71b4c29d4c58f4e3cf8379d9f3a6',
  b: '0xac',
  r: '0x5530f8078378a9cd857b670'
}, {
  a: '0xf',
  b: '-0xb0',
  r: '0xf00000000000000000000000000000000000000000000'
}, {
  a: '-0x33b97c88e3',
  b: '0xab',
  r: '-0x1'
}, {
  a: '0xc740206d5ec010fce88eec7b18579f5fa37e461bbc312fc0',
  b: '-0x64',
  r: '0xc740206d5ec010fce88eec7b18579f5fa37e461bbc312fc00000000000000000000000000'
}, {
  a: '0xe4ab1474dc6db981407f878fc3e443fdbd16e',
  b: '0x9',
  r: '0x72558a3a6e36dcc0a03fc3c7e1f221fede8'
}, {
  a: '-0xe9e47f6bf8',
  b: '-0x43',
  r: '-0x74f23fb5fc00000000000000000'
}, {
  a: '-0x870a0747fb65b7900beb',
  b: '0x0',
  r: '-0x870a0747fb65b7900beb'
}, {
  a: '0x0',
  b: '-0x4a',
  r: '0x0'
}, {
  a: '-0xb09840437ae5af57',
  b: '-0xe5',
  r: '-0x161308086f5cb5eae000000000000000000000000000000000000000000000000000000000'
}, {
  a: '0x1eea850b9a00603f13a93b7ca8972dbbd',
  b: '-0xd3',
  r: '0xf754285cd00301f89d49dbe544b96dde80000000000000000000000000000000000000000000000000000'
}, {
  a: '-0x1e31cf4c7648b1f789cb56',
  b: '-0xcb',
  r: '-0xf18e7a63b2458fbc4e5ab000000000000000000000000000000000000000000000000000'
}, {
  a: '0x87b5b',
  b: '-0xb7',
  r: '0x43dad8000000000000000000000000000000000000000000000'
}, {
  a: '-0xcc3994757a2572c85ddf7879f1868f41b9d2fe4f9092fe93fb89d',
  b: '-0xcc',
  r: '-0xcc3994757a2572c85ddf7879f1868f41b9d2fe4f9092fe93fb89d000000000000000000000000000000000000000000000000000'
}, {
  a: '-0xfd626db3c9395387ca436',
  b: '-0x5f',
  r: '-0x7eb136d9e49ca9c3e521b000000000000000000000000'
}, {
  a: '0xc488884d33420d',
  b: '0x0',
  r: '0xc488884d33420d'
}, {
  a: '0x5eb624546a2f8d60',
  b: '-0x22',
  r: '0x17ad89151a8be358000000000'
}, {
  a: '-0x14',
  b: '-0x88',
  r: '-0x140000000000000000000000000000000000'
}, {
  a: '0x37969b0714be5f798c00278c283862b5bd281ed36dfd8a498ab69f003a60339088',
  b: '0xb8b',
  r: '0x0'
}, {
  a: '-0xa3686891dc9af47fc92e7a2813270b7d7b',
  b: '0x790',
  r: '-0x1'
}, {
  a: '-0xd',
  b: '-0x8b',
  r: '-0x680000000000000000000000000000000000'
}, {
  a: '-0x68d8fa9a65ff5b301e',
  b: '-0x1a',
  r: '-0x1a363ea6997fd6cc078000000'
}, {
  a: '0x252e19c278aa64974d444c',
  b: '-0x95',
  r: '0x4a5c3384f154c92e9a88980000000000000000000000000000000000000'
}, {
  a: '0x3',
  b: '-0xc3',
  r: '0x18000000000000000000000000000000000000000000000000'
}, {
  a: '-0xcf157e4621a97924d',
  b: '0x0',
  r: '-0xcf157e4621a97924d'
}, {
  a: '-0x93de0611ee2a6fb67e09657f99dee6e7eeb8692bbf25eb3',
  b: '0x0',
  r: '-0x93de0611ee2a6fb67e09657f99dee6e7eeb8692bbf25eb3'
}, {
  a: '0x487af',
  b: '0x2',
  r: '0x121eb'
}, {
  a: '-0xcd93ee23ebb5535df9dcaf1aefae6',
  b: '0x19',
  r: '-0x66c9f711f5daa9aefcee579'
}, {
  a: '0xec521d6fc87f8dc47b9ed6f',
  b: '0x5',
  r: '0x76290eb7e43fc6e23dcf6b'
}, {
  a: '-0x3bba4a33edbcaf05',
  b: '0x0',
  r: '-0x3bba4a33edbcaf05'
}, {
  a: '-0x68cd6f2e3a36865a388d29dda8c7be666467ea70485aa7c3dfa',
  b: '-0x47',
  r: '-0x3466b7971d1b432d1c4694eed463df333233f538242d53e1efd000000000000000000'
}, {
  a: '-0xcf11a005b1bec85d9a05e6d8f0a3eee7a3a0489db6cd13f593f14aa16b38',
  b: '0x0',
  r: '-0xcf11a005b1bec85d9a05e6d8f0a3eee7a3a0489db6cd13f593f14aa16b38'
}, {
  a: '0x5cdb',
  b: '0x0',
  r: '0x5cdb'
}, {
  a: '0xba79b0',
  b: '0xcd',
  r: '0x0'
}, {
  a: '0x8059ce825d8e70be',
  b: '0x2',
  r: '0x201673a097639c2f'
}, {
  a: '0x7f2f1fa54db1feb0e57345ef0d237f825ca75859361a5',
  b: '0x5e',
  r: '0x1fcbc7e9536c7fac395cd1'
}, {
  a: '-0x89ee6e0d16877f36d0044',
  b: '-0xba',
  r: '-0x227b9b8345a1dfcdb401100000000000000000000000000000000000000000000000'
}, {
  a: '0x2884786075184a9c2a116ede84c56e86db3c778767ebe4f5fb73',
  b: '-0x6d',
  r: '0x5108f0c0ea3095385422ddbd098add0db678ef0ecfd7c9ebf6e6000000000000000000000000000'
}, {
  a: '0xa86670b4040756300e5af1e0',
  b: '0xd8',
  r: '0x0'
}, {
  a: '-0x61f00f61ac7a7ef52a590ef954be7cd161f10946b',
  b: '0x0',
  r: '-0x61f00f61ac7a7ef52a590ef954be7cd161f10946b'
}];

const dataSmall = [{
  a: '0x98ca23',
  b: '0x11',
  r: '0x4c'
}, {
  a: '-0xf95ed',
  b: '-0xd',
  r: '-0x1f2bda000'
}, {
  a: '-0xa24953ae23245bf',
  b: '-0xc',
  r: '-0xa24953ae23245bf000'
}, {
  a: '-0x16da05c4e652',
  b: '-0x9',
  r: '-0x2db40b89cca400'
}, {
  a: '0x2aa6',
  b: '0x0',
  r: '0x2aa6'
}, {
  a: '-0x2722524e355a',
  b: '0x0',
  r: '-0x2722524e355a'
}, {
  a: '0xbdf5ce075b324',
  b: '-0xd',
  r: '0x17beb9c0eb6648000'
}, {
  a: '0x62e83c',
  b: '-0x3',
  r: '0x31741e0'
}, {
  a: '0x9',
  b: '0xeec',
  r: '0x0'
}, {
  a: '-0x6c0',
  b: '-0xa',
  r: '-0x1b0000'
}, {
  a: '-0x4009688d41b',
  b: '-0x7',
  r: '-0x2004b446a0d80'
}, {
  a: '0xe0415c0',
  b: '-0x8',
  r: '0xe0415c000'
}, {
  a: '-0x125f6e93da920e',
  b: '0xe',
  r: '-0x497dba4f6b'
}, {
  a: '-0xcc3c6c88',
  b: '-0xc',
  r: '-0xcc3c6c88000'
}, {
  a: '-0xb18e02ae',
  b: '0x2ae',
  r: '-0x1'
}, {
  a: '-0xc29afa77711ef9',
  b: '0xc3f',
  r: '-0x1'
}, {
  a: '-0x5fc1',
  b: '0x422',
  r: '-0x1'
}, {
  a: '0x8',
  b: '0x0',
  r: '0x8'
}, {
  a: '-0xe06830d8de617d',
  b: '-0xf',
  r: '-0x7034186c6f30be8000'
}, {
  a: '0x639b',
  b: '0x2',
  r: '0x18e6'
}, {
  a: '0xfa8ae',
  b: '-0x3',
  r: '0x7d4570'
}, {
  a: '-0xc4506663',
  b: '-0xb',
  r: '-0x62283331800'
}, {
  a: '-0xffdafd6506d3',
  b: '-0xa',
  r: '-0x3ff6bf5941b4c00'
}, {
  a: '-0x87881167',
  b: '0x46',
  r: '-0x1'
}, {
  a: '-0xfaace40a3d288',
  b: '-0x5',
  r: '-0x1f559c8147a5100'
}, {
  a: '0x89',
  b: '0x0',
  r: '0x89'
}, {
  a: '-0x3b3c98c329b84f',
  b: '-0x2',
  r: '-0xecf2630ca6e13c'
}, {
  a: '0x99d9b9',
  b: '0xab0',
  r: '0x0'
}, {
  a: '0xe',
  b: '0x0',
  r: '0xe'
}, {
  a: '0x0',
  b: '0x6',
  r: '0x0'
}, {
  a: '-0x5ff',
  b: '0xd',
  r: '-0x1'
}, {
  a: '0xeb4fe',
  b: '0x0',
  r: '0xeb4fe'
}, {
  a: '0x30ddc8047cf72d2',
  b: '-0x8',
  r: '0x30ddc8047cf72d200'
}, {
  a: '-0x2bc520731840ee2',
  b: '-0x1',
  r: '-0x578a40e63081dc4'
}, {
  a: '-0xd38133',
  b: '-0x8',
  r: '-0xd3813300'
}, {
  a: '0x7cefd9b3925',
  b: '0x4',
  r: '0x7cefd9b392'
}, {
  a: '0x4e',
  b: '-0xb',
  r: '0x27000'
}, {
  a: '0xfc624',
  b: '0x0',
  r: '0xfc624'
}, {
  a: '-0xc5803bb802',
  b: '-0x8',
  r: '-0xc5803bb80200'
}, {
  a: '0xc953f2',
  b: '0x579',
  r: '0x0'
}, {
  a: '0x1a6dab86a',
  b: '0x97c',
  r: '0x0'
}, {
  a: '-0xe04b4194987763c',
  b: '-0x9',
  r: '-0x1c096832930eec7800'
}, {
  a: '-0xd950f401b3',
  b: '0xa',
  r: '-0x36543d01'
}, {
  a: '-0x89b6',
  b: '-0x5',
  r: '-0x1136c0'
}, {
  a: '0xe3',
  b: '0x631',
  r: '0x0'
}, {
  a: '-0xfd',
  b: '0x9e7',
  r: '-0x1'
}, {
  a: '0x6f9c9f92c5cbf',
  b: '0xb6b',
  r: '0x0'
}, {
  a: '0x11a1b27',
  b: '-0x2',
  r: '0x4686c9c'
}, {
  a: '-0x264803',
  b: '-0x3',
  r: '-0x1324018'
}, {
  a: '0x1223d8c3af',
  b: '-0xf',
  r: '0x911ec61d78000'
}, {
  a: '0x5d6d7370685717d',
  b: '-0x4',
  r: '0x5d6d7370685717d0'
}, {
  a: '0xbc1b0bc1955117d',
  b: '0x270',
  r: '0x0'
}, {
  a: '-0x21ae9a0',
  b: '-0x7',
  r: '-0x10d74d000'
}, {
  a: '0x6a49',
  b: '0xb34',
  r: '0x0'
}, {
  a: '-0xd4b868e0d367178',
  b: '0xa',
  r: '-0x352e1a3834d9d'
}, {
  a: '-0x5e',
  b: '0xe2',
  r: '-0x1'
}, {
  a: '-0xa632501fc2077bd',
  b: '-0xd',
  r: '-0x14c64a03f840ef7a000'
}, {
  a: '-0x85287d73ef',
  b: '-0x4',
  r: '-0x85287d73ef0'
}, {
  a: '0x0',
  b: '-0xeb',
  r: '0x0'
}, {
  a: '0x79598',
  b: '0xd',
  r: '0x3c'
}, {
  a: '-0x7d15f8d351',
  b: '-0xb',
  r: '-0x3e8afc69a8800'
}, {
  a: '0xee8bf99b',
  b: '0x1',
  r: '0x7745fccd'
}, {
  a: '-0xc3831c86466178f',
  b: '-0x8',
  r: '-0xc3831c86466178f00'
}, {
  a: '0x26ce',
  b: '0xc59',
  r: '0x0'
}, {
  a: '0x4bfd3da',
  b: '0xe',
  r: '0x12ff'
}, {
  a: '-0xfd4',
  b: '-0x2',
  r: '-0x3f50'
}, {
  a: '0x3c0ab',
  b: '0xf6',
  r: '0x0'
}, {
  a: '0x733bf309b4dfa',
  b: '-0x7',
  r: '0x399df984da6fd00'
}, {
  a: '-0x4',
  b: '-0x4',
  r: '-0x40'
}, {
  a: '0x0',
  b: '-0xd7',
  r: '0x0'
}, {
  a: '0x76c0a841fc395cc',
  b: '0x3d8',
  r: '0x0'
}, {
  a: '-0xfd233ea3317',
  b: '-0x8',
  r: '-0xfd233ea331700'
}, {
  a: '-0xf91629708',
  b: '-0x3',
  r: '-0x7c8b14b840'
}, {
  a: '0xf510e',
  b: '-0x4',
  r: '0xf510e0'
}, {
  a: '-0x8de8cab2c1783',
  b: '0x0',
  r: '-0x8de8cab2c1783'
}, {
  a: '0x8283aebb7335',
  b: '0x0',
  r: '0x8283aebb7335'
}, {
  a: '0x8abb04',
  b: '-0xe',
  r: '0x22aec10000'
}, {
  a: '-0x51',
  b: '0x0',
  r: '-0x51'
}, {
  a: '0x38739c5280bc903',
  b: '-0xc',
  r: '0x38739c5280bc903000'
}, {
  a: '-0xd3412bbc5023',
  b: '-0xb',
  r: '-0x69a095de2811800'
}, {
  a: '0xef3e46f2c602c0f',
  b: '0xa',
  r: '0x3bcf91bcb180b'
}, {
  a: '-0x544f',
  b: '0x81',
  r: '-0x1'
}, {
  a: '-0xef7425f5d5a27',
  b: '0xcd4',
  r: '-0x1'
}, {
  a: '-0xdf4a',
  b: '0x8fb',
  r: '-0x1'
}, {
  a: '0xf1735f04efd',
  b: '0x0',
  r: '0xf1735f04efd'
}, {
  a: '-0xa',
  b: '-0x8',
  r: '-0xa00'
}, {
  a: '-0x414daf05c799f',
  b: '-0x2',
  r: '-0x10536bc171e67c'
}, {
  a: '0xec8c668f8a67e',
  b: '-0xa',
  r: '0x3b2319a3e299f800'
}, {
  a: '0xcff86a',
  b: '-0xc',
  r: '0xcff86a000'
}, {
  a: '0x713e800d8',
  b: '-0x1',
  r: '0xe27d001b0'
}, {
  a: '0xf06e0dd9242c7',
  b: '-0xb',
  r: '0x783706ec92163800'
}, {
  a: '-0x4febf48b',
  b: '-0xb',
  r: '-0x27f5fa45800'
}, {
  a: '-0xb18614e0',
  b: '0x54d',
  r: '-0x1'
}, {
  a: '0xccb9e0',
  b: '-0x2',
  r: '0x332e780'
}, {
  a: '-0x8225be349a44a',
  b: '-0x5',
  r: '-0x1044b7c69348940'
}, {
  a: '-0x9deb0f1c02d2',
  b: '0xff',
  r: '-0x1'
}, {
  a: '0xcb5fa3',
  b: '0x871',
  r: '0x0'
}, {
  a: '0x990f1bf3515e8',
  b: '-0x2',
  r: '0x2643c6fcd457a0'
}, {
  a: '-0x62c2a5af7ce',
  b: '-0x3',
  r: '-0x316152d7be70'
}, {
  a: '-0x9d9d08f5',
  b: '0x980',
  r: '-0x1'
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
    const r = d.a >> d.b;
    if (d.r !== r) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: >>');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a >> d.b;
    }
  }
  return Date.now() - t1;
}


function testJsb(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = d.a.signedRightShift(d.b);
    if (!r.equal(d.r)) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: signedRightShift');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a.signedRightShift(d.b);
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
