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

// This file was generated by scripts/generate-benchmark.py, do not modify!

const dataBig = [{
  a: '0xA9877EFFB86C68AA84A8511736DA626FDA2726F939227295266641191C50AC97A004A',
  b: '0x935',
  r: '0x0',
}, {
  a: '-0x688A67F9F485FACC674BF6',
  b: '0xAF',
  r: '-0x1',
}, {
  a: '-0x332EDA2499AD5B53F80541E84086B6D66FC2B39957',
  b: '0x49',
  r: '-0x19976D124CD6ADA9FC02A0F5',
}, {
  a: '-0xFC9D5E5DD51',
  b: '-0x77',
  r: '-0x7E4EAF2EEA8800000000000000000000000000000',
}, {
  a: '0x939C31D042CDC704700C71B329A9169AC20CE5A6E4861E44E8',
  b: '0xF65',
  r: '0x0',
}, {
  a: '-0x677172B52F95D5D1C5774D7FB05C0',
  b: '0x0',
  r: '-0x677172B52F95D5D1C5774D7FB05C0',
}, {
  a: '0xAD66935E757AA4FE1C84516A59',
  b: '0xFB2',
  r: '0x0',
}, {
  a: '-0x97A7F47DAEA2D9AD78A7F38B79F4664544E8C6330C1F9D65C7E2D797DB3EE8167D3A',
  b: '0x0',
  r: '-0x97A7F47DAEA2D9AD78A7F38B79F4664544E8C6330C1F9D65C7E2D797DB3EE8167D3A',
}, {
  a: '0xC40ECFB06B9A97FAE7428EAA4',
  b: '0x0',
  r: '0xC40ECFB06B9A97FAE7428EAA4',
}, {
  a: '0x14B6E1E02D4AC1844E0A03E1A74',
  b: '-0xE1',
  r: '0x296DC3C05A9583089C1407C34E800000000000000000000000000000000000000000000000000000000',
}, {
  a: '0x7FD75320FF48',
  b: '0x3',
  r: '0xFFAEA641FE9',
}, {
  a: '-0x2413788ECF1070AD',
  b: '-0x54',
  r: '-0x2413788ECF1070AD000000000000000000000',
}, {
  a: '-0xA313D2322BE6',
  b: '-0x5F',
  r: '-0x5189E91915F3000000000000000000000000',
}, {
  a: '-0x96986A62C186C8EAC2BB5DFBA640AEC2C788B742',
  b: '-0x5E',
  r: '-0x25A61A98B061B23AB0AED77EE9902BB0B1E22DD0800000000000000000000000',
}, {
  a: '-0x7835B4D5C22D945755EF2D53B874E25B79F3DFB076D9D9524FC9',
  b: '0xF',
  r: '-0xF06B69AB845B28AEABDE5AA770E9C4B6F3E7BF60EDB3B2A5',
}, {
  a: '0x54A8378933493440705FD56DFE3C9EBA4804A3459C43',
  b: '0x46B',
  r: '0x0',
}, {
  a: '0xA4230B5060',
  b: '0x0',
  r: '0xA4230B5060',
}, {
  a: '0x5230C111DE4F947B1EC367D',
  b: '-0xA9',
  r: '0xA4618223BC9F28F63D86CFA000000000000000000000000000000000000000000',
}, {
  a: '0x1968C0A2728B59E12EFB9918619F3BE481F28CC6DE38CA5090B6',
  b: '-0x37',
  r: '0xCB460513945ACF0977DCC8C30CF9DF240F946636F1C6528485B00000000000000',
}, {
  a: '-0x29A3566094F3225C43894601062A045DCC516F95B606D18CF17C3396BC75D3',
  b: '-0x8',
  r: '-0x29A3566094F3225C43894601062A045DCC516F95B606D18CF17C3396BC75D300',
}, {
  a: '-0x292A9FBD6386A7AD1DD',
  b: '-0x40',
  r: '-0x292A9FBD6386A7AD1DD0000000000000000',
}, {
  a: '-0x9AFA8D884264ED566E7DFA4C8B35E66C',
  b: '0xF5',
  r: '-0x1',
}, {
  a: '0x6A8D705A775FEE7D58F7',
  b: '0x3',
  r: '0xD51AE0B4EEBFDCFAB1E',
}, {
  a: '0x7',
  b: '-0x4B',
  r: '0x38000000000000000000',
}, {
  a: '-0xD00DE4CD978344B5DC73A565637B64BD508B',
  b: '-0x73',
  r: '-0x6806F266CBC1A25AEE39D2B2B1BDB25EA84580000000000000000000000000000',
}, {
  a: '-0xF43B61AF4EAAE13E38F9201874513BFB8CF5',
  b: '-0x24',
  r: '-0xF43B61AF4EAAE13E38F9201874513BFB8CF5000000000',
}, {
  a: '-0x25A6B',
  b: '-0x4D',
  r: '-0x4B4D60000000000000000000',
}, {
  a: '-0x8DA4B934A1E65ADDDA2EFC0BBDE757709F27BDCC09B24B1252',
  b: '-0x84',
  r: '-0x8DA4B934A1E65ADDDA2EFC0BBDE757709F27BDCC09B24B1252000000000000000000000000000000000',
}, {
  a: '0xDCA31AB49C8F42909EDDF396EE821372534D394895BFBADC5',
  b: '-0x34',
  r: '0xDCA31AB49C8F42909EDDF396EE821372534D394895BFBADC50000000000000',
}, {
  a: '0xC4786C38411F2FCAED2A38195DEA726FD95295B7CE224E5B9B90BB4EA',
  b: '-0xB',
  r: '0x623C361C208F97E576951C0CAEF53937ECA94ADBE711272DCDC85DA75000',
}, {
  a: '-0xCE9736ABCF95DFA82662B39C3A11FAB9D3A4D44762809774B546786C00C',
  b: '0x0',
  r: '-0xCE9736ABCF95DFA82662B39C3A11FAB9D3A4D44762809774B546786C00C',
}, {
  a: '-0x497DFFF1B26CE52B4C86EE50DAA10558380EEF',
  b: '-0xC4',
  r: '-0x497DFFF1B26CE52B4C86EE50DAA10558380EEF0000000000000000000000000000000000000000000000000',
}, {
  a: '-0x861E5436CDCD6B82262A9AFB7B61CADC203A6CE9B2FAD7719D0E5071D460669',
  b: '-0xE',
  r: '-0x2187950DB3735AE0898AA6BEDED872B7080E9B3A6CBEB5DC6743941C751819A4000',
}, {
  a: '-0xFED63E62570408D0C18C7470A0A5405FB9AF131AAE4A7EE49778EFC545AF946A56741',
  b: '-0xD',
  r: '-0x1FDAC7CC4AE0811A18318E8E1414A80BF735E26355C94FDC92EF1DF8A8B5F28D4ACE82000',
}, {
  a: '-0xB517C71C825C5E725DBAD9',
  b: '-0x8E',
  r: '-0x2D45F1C72097179C976EB6400000000000000000000000000000000000',
}, {
  a: '-0x23FF2858B112204BA',
  b: '0x0',
  r: '-0x23FF2858B112204BA',
}, {
  a: '0x2C815761D2CDB9159B641F5C70E43E026F102D',
  b: '0x6C',
  r: '0x2C815761D2C',
}, {
  a: '-0xE20737816800B65CEB1D018FDDCD875CDCF2BB63FD9910A0',
  b: '0x63',
  r: '-0x1C40E6F02D0016CB9D63A032',
}, {
  a: '-0x84932A8525FF8EC41922D80FB3CCC42AA085552E0A9BD',
  b: '0x15',
  r: '-0x4249954292FFC7620C916C07D9E662155042AA98',
}, {
  a: '0xACAA70809E17C29FC8A5A860BFA74B5A49C16B2979B',
  b: '0x0',
  r: '0xACAA70809E17C29FC8A5A860BFA74B5A49C16B2979B',
}, {
  a: '0x1BC2CC7A5D6F595A47BB83DA929B32FF99A6B4D20CAB2D0B0A35313',
  b: '-0x6',
  r: '0x6F0B31E975BD65691EEE0F6A4A6CCBFE669AD34832ACB42C28D4C4C0',
}, {
  a: '-0x3304975273A731A34C3A',
  b: '0x0',
  r: '-0x3304975273A731A34C3A',
}, {
  a: '0xC24F0',
  b: '-0xFD',
  r: '0x1849E0000000000000000000000000000000000000000000000000000000000000000',
}, {
  a: '0x0',
  b: '-0xEB',
  r: '0x0',
}, {
  a: '0xECCB410C297489539173D747672A2F0DAB6500536D54255D9F8',
  b: '0x0',
  r: '0xECCB410C297489539173D747672A2F0DAB6500536D54255D9F8',
}, {
  a: '0x4E922F5DFEED3448FF4472E265D3B46BD63BABE0968B46BD6008E332293A2894',
  b: '-0xC',
  r: '0x4E922F5DFEED3448FF4472E265D3B46BD63BABE0968B46BD6008E332293A2894000',
}, {
  a: '0x2DCA9A66D19CACA7D4E5F60318FF4F6E',
  b: '0xF',
  r: '0x5B9534CDA339594FA9CBEC0631FE',
}, {
  a: '0x728FEB419DDFDFFE711FA052231F501CA29F5CF4CCC910F23BF804EB9FE33AA67',
  b: '0xA',
  r: '0x1CA3FAD06777F7FF9C47E81488C7D40728A7D73D3332443C8EFE013AE7F8CEA',
}, {
  a: '0xA0BD7B485A64E6CF9174BDF1B6B767FC68E00C5100BC209',
  b: '-0x8D',
  r: '0x1417AF690B4C9CD9F22E97BE36D6ECFF8D1C018A2017841200000000000000000000000000000000000',
}, {
  a: '-0x2652CD45E4ED2499',
  b: '-0x9F',
  r: '-0x132966A2F276924C8000000000000000000000000000000000000000',
}, {
  a: '-0x7BDD43D80A74516400A695ADF06864B557261A22816498',
  b: '0x44C',
  r: '-0x1',
}, {
  a: '0x559C4AD7975FB339242239386F6B7D15B1AE76',
  b: '-0xAF',
  r: '0x2ACE256BCBAFD99C92111C9C37B5BE8AD8D73B00000000000000000000000000000000000000000000',
}, {
  a: '-0xB4FA8D2167B8A78007',
  b: '0x0',
  r: '-0xB4FA8D2167B8A78007',
}, {
  a: '0x5C80D38A1DA69B0E3',
  b: '0x0',
  r: '0x5C80D38A1DA69B0E3',
}, {
  a: '0x28',
  b: '0x0',
  r: '0x28',
}, {
  a: '-0x3BA2A21A190586156EB49DC4844E0A037D',
  b: '0x1',
  r: '-0x1DD1510D0C82C30AB75A4EE242270501BF',
}, {
  a: '0x55E',
  b: '-0x80',
  r: '0x55E00000000000000000000000000000000',
}, {
  a: '0x425A3596BD9D0A43986B9D626D7A9CB7',
  b: '0x0',
  r: '0x425A3596BD9D0A43986B9D626D7A9CB7',
}, {
  a: '0xDE997955FF28250F1F',
  b: '-0x35',
  r: '0x1BD32F2ABFE504A1E3E0000000000000',
}, {
  a: '-0x3C9CDA89134B8DC0BECCAD88DA01E0666C5BBD69026024737FF16D1',
  b: '-0xB',
  r: '-0x1E4E6D4489A5C6E05F6656C46D00F033362DDEB481301239BFF8B68800',
}, {
  a: '0x2898B2A102949EBF43A8E9C6AAFB0803',
  b: '0x0',
  r: '0x2898B2A102949EBF43A8E9C6AAFB0803',
}, {
  a: '-0xDF04F56DC40E7F4A0B2BF8D531E0D2DAE01743EE662F158E305A40B658DCB',
  b: '-0x9',
  r: '-0x1BE09EADB881CFE941657F1AA63C1A5B5C02E87DCCC5E2B1C60B4816CB1B9600',
}, {
  a: '-0x8737D3D4AC945B1CBC6',
  b: '-0x95',
  r: '-0x10E6FA7A95928B63978C0000000000000000000000000000000000000',
}, {
  a: '-0x8A3A',
  b: '-0x9B',
  r: '-0x451D000000000000000000000000000000000000000',
}, {
  a: '0xCE94BBF83678ACA5FD14388577107FEA9B39BC646B8247A8656290FC670',
  b: '-0xB',
  r: '0x674A5DFC1B3C5652FE8A1C42BB883FF54D9CDE3235C123D432B1487E338000',
}, {
  a: '0xF2E57443D6EA4F04A3267A7F520CC2C20F83CA42F4AE0A406CB00A8B01A6',
  b: '-0xC',
  r: '0xF2E57443D6EA4F04A3267A7F520CC2C20F83CA42F4AE0A406CB00A8B01A6000',
}, {
  a: '-0x82C',
  b: '0x2D',
  r: '-0x1',
}, {
  a: '-0xE29A8F905DE251D3B6C7E192EFF5',
  b: '0xE18',
  r: '-0x1',
}, {
  a: '0xF292833EB4E1E',
  b: '0x0',
  r: '0xF292833EB4E1E',
}, {
  a: '0xAFB610D',
  b: '-0x4A',
  r: '0x2BED8434000000000000000000',
}, {
  a: '0xD75237DA26177C7F194FDB015C',
  b: '0x31',
  r: '0x6BA91BED130BBE',
}, {
  a: '0x643FE6F56B797',
  b: '0xFA',
  r: '0x0',
}, {
  a: '-0x56DE5F2171782F8315050D',
  b: '0x8',
  r: '-0x56DE5F2171782F831506',
}, {
  a: '-0xAEA2330EC12D856010D2242A0601DD314C58364DB36A2AB4E626',
  b: '-0xD1',
  r: '-0x15D44661D825B0AC021A448540C03BA6298B06C9B66D45569CC4C0000000000000000000000000000000000000000000000000000',
}, {
  a: '-0x54628F31FC60',
  b: '0x9E',
  r: '-0x1',
}, {
  a: '0xF397C28813D32477E5C2D4CDF039BB7CEED379FCAA78A81C6ED36A692BD42AC2D98A',
  b: '0x959',
  r: '0x0',
}, {
  a: '0xE2D2A10E98964DB323879D5DF0BF4352C6A3745F558A11B462C91110',
  b: '-0xC',
  r: '0xE2D2A10E98964DB323879D5DF0BF4352C6A3745F558A11B462C91110000',
}, {
  a: '0xCDCF8B004E659FB96F0246BFA02FBF7E0875A775A32',
  b: '-0x87',
  r: '0x66E7C5802732CFDCB781235FD017DFBF043AD3BAD190000000000000000000000000000000000',
}, {
  a: '0xA8E2E713622',
  b: '0xB7',
  r: '0x0',
}, {
  a: '0xB24A9E1A240A',
  b: '-0x8C',
  r: '0xB24A9E1A240A00000000000000000000000000000000000',
}, {
  a: '-0x1535889A4518A84BD9',
  b: '-0x10',
  r: '-0x1535889A4518A84BD90000',
}, {
  a: '0xE665C137AD70E8671700678BBA388F92BAF5C1D4A82',
  b: '0xDEE',
  r: '0x0',
}, {
  a: '0x3744774F5AB911C1734B9254FC79372E2C3C3A2DA4',
  b: '-0x63',
  r: '0x1BA23BA7AD5C88E0B9A5C92A7E3C9B97161E1D16D20000000000000000000000000',
}, {
  a: '-0x996F7B54B97A87BDD4B88AB5138E3932407F975DCF5F67010DF55B21F976D6BF8A894',
  b: '-0xF',
  r: '-0x4CB7BDAA5CBD43DEEA5C455A89C71C99203FCBAEE7AFB38086FAAD90FCBB6B5FC544A0000',
}, {
  a: '-0xE437E37B426DB818ECB28CDCFA213F40BEE14D1AE946D5D7E1',
  b: '0x12D',
  r: '-0x1',
}, {
  a: '0xFFA',
  b: '0x0',
  r: '0xFFA',
}, {
  a: '-0x9406C5894EE42BDFC33E562F0B706F',
  b: '-0x56',
  r: '-0x2501B16253B90AF7F0CF958BC2DC1BC000000000000000000000',
}, {
  a: '-0xA8D20',
  b: '0x9',
  r: '-0x547',
}, {
  a: '0xEE',
  b: '-0xF3',
  r: '0x770000000000000000000000000000000000000000000000000000000000000',
}, {
  a: '-0x8A3719FEF316F1EF833F6432FFABDA49D66',
  b: '0xD7',
  r: '-0x1',
}, {
  a: '0xD4A743B1A541FA42868ABE533B9958F14C577FFDEFD00FCC2D2924104C11270531F1E',
  b: '0x48',
  r: '0xD4A743B1A541FA42868ABE533B9958F14C577FFDEFD00FCC2D2',
}, {
  a: '0xF3AAC9BA571EC4620DDB14AFDF5775',
  b: '0xA',
  r: '0x3CEAB26E95C7B1188376C52BF7D5',
}, {
  a: '0x4491058307D0036EF9A9299E49E3E96A6B59B49E519B7CDDB',
  b: '0xBE5',
  r: '0x0',
}, {
  a: '0x31801A4D6884647EB1408D',
  b: '0x0',
  r: '0x31801A4D6884647EB1408D',
}, {
  a: '-0x6834DF1F95F2043DE4884CC5122BAC0DACDF1524624B39A41E4D20E',
  b: '-0x7',
  r: '-0x341A6F8FCAF9021EF24426628915D606D66F8A9231259CD20F2690700',
}, {
  a: '0x4FFE1DC929A31115F897CE1BBB4BDA3B94C93A4FE53DDF4929C67B6B',
  b: '-0x6',
  r: '0x13FF87724A68C4457E25F386EED2F68EE5324E93F94F77D24A719EDAC0',
}, {
  a: '0xDEFBCF7547B28F849A4ACE080ECCD03B3396C0C159D7C302F9',
  b: '-0xD0',
  r: '0xDEFBCF7547B28F849A4ACE080ECCD03B3396C0C159D7C302F90000000000000000000000000000000000000000000000000000',
}, {
  a: '0x6AF1C6F7BA4F6BE5821EAA6E58BA18EB22A91B5D64F3023E8790C26F5675DDE5AD30',
  b: '0xE',
  r: '0x1ABC71BDEE93DAF96087AA9B962E863AC8AA46D7593CC08FA1E4309BD59D77796',
}, {
  a: '-0x4063C',
  b: '0xC2',
  r: '-0x1',
}, {
  a: '0xA24FB28E94763EA02863CDCB3ECA5AEBB985D80C',
  b: '0x0',
  r: '0xA24FB28E94763EA02863CDCB3ECA5AEBB985D80C',
}];

const dataSmall = [{
  a: '-0xE9C9346847FD',
  b: '-0x7',
  r: '-0x74E49A3423FE80',
}, {
  a: '-0x97952620E89E',
  b: '-0xA',
  r: '-0x25E549883A27800',
}, {
  a: '-0xD5EC',
  b: '0x0',
  r: '-0xD5EC',
}, {
  a: '0x3BA32572C',
  b: '-0xA',
  r: '0xEE8C95CB000',
}, {
  a: '0x7C37E',
  b: '0x13C',
  r: '0x0',
}, {
  a: '-0x40A87263C',
  b: '0x7FD',
  r: '-0x1',
}, {
  a: '0xDDB55F',
  b: '0x0',
  r: '0xDDB55F',
}, {
  a: '0x0',
  b: '-0xA0',
  r: '0x0',
}, {
  a: '0xC',
  b: '0x52B',
  r: '0x0',
}, {
  a: '0xF0EEA1',
  b: '0x99',
  r: '0x0',
}, {
  a: '-0x1D190E130ED1B5',
  b: '-0x5',
  r: '-0x3A321C261DA36A0',
}, {
  a: '0x142E8',
  b: '0xA7B',
  r: '0x0',
}, {
  a: '-0x63FF8',
  b: '-0x8',
  r: '-0x63FF800',
}, {
  a: '0x7494194D0D37',
  b: '0x0',
  r: '0x7494194D0D37',
}, {
  a: '-0x8C120E16',
  b: '0x4C2',
  r: '-0x1',
}, {
  a: '-0x23E5230',
  b: '-0x7',
  r: '-0x11F291800',
}, {
  a: '0x0',
  b: '0x0',
  r: '0x0',
}, {
  a: '0x7D',
  b: '-0xF',
  r: '0x3E8000',
}, {
  a: '0x7',
  b: '0x7',
  r: '0x0',
}, {
  a: '-0xA15D89507EE25',
  b: '0x0',
  r: '-0xA15D89507EE25',
}, {
  a: '-0xAFB4',
  b: '-0x9',
  r: '-0x15F6800',
}, {
  a: '0x2D2',
  b: '-0x2',
  r: '0xB48',
}, {
  a: '-0x1AC7A970AF99B',
  b: '-0x2',
  r: '-0x6B1EA5C2BE66C',
}, {
  a: '-0xEEA',
  b: '-0x5',
  r: '-0x1DD40',
}, {
  a: '0xFE57CB5A',
  b: '-0xD',
  r: '0x1FCAF96B4000',
}, {
  a: '0x0',
  b: '0x7',
  r: '0x0',
}, {
  a: '-0xC404',
  b: '0x302',
  r: '-0x1',
}, {
  a: '-0x5FF',
  b: '0x0',
  r: '-0x5FF',
}, {
  a: '0xE00A449',
  b: '-0xB',
  r: '0x7005224800',
}, {
  a: '-0xAE9240B4A134F2F',
  b: '0x0',
  r: '-0xAE9240B4A134F2F',
}, {
  a: '-0xDA4',
  b: '0x0',
  r: '-0xDA4',
}, {
  a: '0xD912B2',
  b: '-0x6',
  r: '0x3644AC80',
}, {
  a: '0x9B62',
  b: '-0x8',
  r: '0x9B6200',
}, {
  a: '0x0',
  b: '0x93',
  r: '0x0',
}, {
  a: '0x5C3F',
  b: '0x4C',
  r: '0x0',
}, {
  a: '-0x97183AB89B1E9BB',
  b: '-0x3',
  r: '-0x4B8C1D5C4D8F4DD8',
}, {
  a: '-0x9A26C21C7D9C81B',
  b: '0x0',
  r: '-0x9A26C21C7D9C81B',
}, {
  a: '0xADF7ED',
  b: '-0x7',
  r: '0x56FBF680',
}, {
  a: '-0x2796C10751',
  b: '-0x8',
  r: '-0x2796C1075100',
}, {
  a: '0x7',
  b: '0x3',
  r: '0x0',
}, {
  a: '0x0',
  b: '0x0',
  r: '0x0',
}, {
  a: '0x7',
  b: '0xA1',
  r: '0x0',
}, {
  a: '0x7633D0C3',
  b: '-0x6',
  r: '0x1D8CF430C0',
}, {
  a: '-0xBC3FCE3DD7B',
  b: '-0x2',
  r: '-0x2F0FF38F75EC',
}, {
  a: '0x3C04BF6D',
  b: '0x0',
  r: '0x3C04BF6D',
}, {
  a: '0xC',
  b: '0x1B',
  r: '0x0',
}, {
  a: '-0x2801C6EA7',
  b: '0x0',
  r: '-0x2801C6EA7',
}, {
  a: '0x2B1',
  b: '0xF1',
  r: '0x0',
}, {
  a: '0x6D838',
  b: '0x59',
  r: '0x0',
}, {
  a: '0xAD188F75C14E',
  b: '0x6',
  r: '0x2B4623DD705',
}, {
  a: '0x1E0F18EAA1B66',
  b: '-0x7',
  r: '0xF078C7550DB300',
}, {
  a: '-0xA8E138D',
  b: '-0xA',
  r: '-0x2A384E3400',
}, {
  a: '-0x5486FA32CA5E60',
  b: '-0xE',
  r: '-0x1521BE8CB297980000',
}, {
  a: '0x2',
  b: '-0xB',
  r: '0x1000',
}, {
  a: '0x4',
  b: '0x1',
  r: '0x2',
}, {
  a: '0x575D',
  b: '0xCAB',
  r: '0x0',
}, {
  a: '0x5882AD',
  b: '0xD8',
  r: '0x0',
}, {
  a: '-0xA1B1ACBE2A',
  b: '0xE6',
  r: '-0x1',
}, {
  a: '0x39EC0',
  b: '0xF',
  r: '0x7',
}, {
  a: '0x0',
  b: '0xEBC',
  r: '0x0',
}, {
  a: '0xAB3E6E4C31',
  b: '-0x4',
  r: '0xAB3E6E4C310',
}, {
  a: '0x0',
  b: '0x4E5',
  r: '0x0',
}, {
  a: '0x493A37E',
  b: '-0xC',
  r: '0x493A37E000',
}, {
  a: '-0x251A8',
  b: '0x0',
  r: '-0x251A8',
}, {
  a: '0x8D',
  b: '-0x4',
  r: '0x8D0',
}, {
  a: '0xECA284D9351',
  b: '0x2',
  r: '0x3B28A1364D4',
}, {
  a: '0xEC0CC01B48FBD17',
  b: '0xF8',
  r: '0x0',
}, {
  a: '0x980',
  b: '-0x4',
  r: '0x9800',
}, {
  a: '0x2BB',
  b: '-0xE',
  r: '0xAEC000',
}, {
  a: '-0xE2F95B2D20B',
  b: '0x7C',
  r: '-0x1',
}, {
  a: '0x6692DABFAEE7E4',
  b: '0x13',
  r: '0xCD25B57F5',
}, {
  a: '0x33DCFB18A2CEEBE',
  b: '-0x8',
  r: '0x33DCFB18A2CEEBE00',
}, {
  a: '0x59BD1D96C6440',
  b: '-0x4',
  r: '0x59BD1D96C64400',
}, {
  a: '-0x9C090862CF',
  b: '-0x3',
  r: '-0x4E048431678',
}, {
  a: '-0x18FCFE89D2A9',
  b: '-0xE',
  r: '-0x63F3FA274AA4000',
}, {
  a: '0xFE',
  b: '0x9',
  r: '0x0',
}, {
  a: '0x7',
  b: '0xE',
  r: '0x0',
}, {
  a: '-0x6',
  b: '0x82D',
  r: '-0x1',
}, {
  a: '0x6131',
  b: '0x42D',
  r: '0x0',
}, {
  a: '0x6',
  b: '0x7',
  r: '0x0',
}, {
  a: '-0x557C82BEC56CC',
  b: '0x3A0',
  r: '-0x1',
}, {
  a: '-0x3C728C13A7F',
  b: '0x5',
  r: '-0x1E394609D4',
}, {
  a: '-0xE',
  b: '-0xA',
  r: '-0x3800',
}, {
  a: '-0x76',
  b: '0xD',
  r: '-0x1',
}, {
  a: '-0xFF5821B0D813',
  b: '-0x5',
  r: '-0x1FEB04361B0260',
}, {
  a: '-0xB8DBEAA8',
  b: '-0x3',
  r: '-0x5C6DF5540',
}, {
  a: '0xAA24C',
  b: '0xAB7',
  r: '0x0',
}, {
  a: '-0xE0C8C0',
  b: '-0x4',
  r: '-0xE0C8C00',
}, {
  a: '0xEC078B5F',
  b: '0xE2',
  r: '0x0',
}, {
  a: '0xB87AB860A5',
  b: '-0xF',
  r: '0x5C3D5C30528000',
}, {
  a: '0xAF1BAF675258',
  b: '0x1',
  r: '0x578DD7B3A92C',
}, {
  a: '-0x7FD96616',
  b: '0xF',
  r: '-0xFFB3',
}, {
  a: '0x6BD22B2',
  b: '-0x6',
  r: '0x1AF48AC80',
}, {
  a: '-0x640FB868',
  b: '-0xD',
  r: '-0xC81F70D0000',
}, {
  a: '-0x994C20C',
  b: '0xCD',
  r: '-0x1',
}, {
  a: '-0x762F',
  b: '0xD0',
  r: '-0x1',
}, {
  a: '0x0',
  b: '-0xE6',
  r: '0x0',
}, {
  a: '0xA296',
  b: '0x4EF',
  r: '0x0',
}, {
  a: '0x80522C689154537',
  b: '0xF',
  r: '0x100A458D122A',
}, {
  a: '-0xAE1D233',
  b: '0x2B',
  r: '-0x1',
}];

import JSBI from '../dist/jsbi.mjs';
const JSBigInt = JSBI.BigInt;

let errorCount = 0;

const dataBigNative = [];
const dataBigJsbi = [];
const dataSmallNative = [];
const dataSmallJsbi = [];

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
function parseJSBI(d) {
  if (d.b) {
    return {a: hexParse(d.a), b: hexParse(d.b), r: hexParse(d.r)};
  }
  return {a: hexParse(d.a), r: hexParse(d.r)};
}
function prepareData(src, dstNative, dstJsbi) {
  for (let i = 0; i < src.length; i++) {
    const d = src[i];
    dstNative.push(parseNative(d));
    dstJsbi.push(parseJSBI(d));
  }
}
prepareData(dataBig, dataBigNative, dataBigJsbi);
prepareData(dataSmall, dataSmallNative, dataSmallJsbi);


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
  // Confuse the compiler into thinking that the loop is needed :-)
  const d = data[data.length - 1];
  if (d.r !== r) throw new Error('no dead code elimination please');
  return Date.now() - t1;
}


function testJsbi(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = JSBI.signedRightShift(d.a, d.b);
    if (!JSBI.equal(r, d.r)) {
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
      r = JSBI.signedRightShift(d.a, d.b);
    }
  }
  // Confuse the compiler into thinking that the loop is needed :-)
  const d = data[data.length - 1];
  if (!JSBI.equal(r, d.r)) throw new Error('no dead code elimination please');
  return Date.now() - t1;
}


const kRepsBig = 40000;
const kRepsSmall = 120000;

console.log('Testing signedRightShift:');
console.log('Native/big:   ' + testNative(dataBigNative, kRepsBig));
console.log('JSBI/big:     ' + testJsbi(dataBigJsbi, kRepsBig));
console.log('Native/small: ' + testNative(dataSmallNative, kRepsSmall));
console.log('JSBI/small:   ' + testJsbi(dataSmallJsbi, kRepsSmall));

if (errorCount !== 0) {
  console.error('Finished with ' + errorCount + ' errors.');
  // Support both d8 (`quit`) and Node.js (`process.exit`).
  (typeof quit !== 'undefined' ? quit : process.exit)(1);
}
