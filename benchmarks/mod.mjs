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
  a: '-0xC11459551A388365E04938EF293D45ECF95F1D5F46B',
  b: '0xE6CF377E14D0E',
  r: '-0xB6D8C49BE20B3',
}, {
  a: '-0xE099993527B44BCF301FFA85D33DB307A29C38969715A02A483EC2EA1EB',
  b: '-0x34FFBE052484BC',
  r: '-0x1D89734857EC63',
}, {
  a: '0x961754AE95E6B5C0124C0FCB98067037AFCC608389',
  b: '0xD6EE12C7BB2911D56E7B77',
  r: '0xD023D9A472519CF3C2DE0B',
}, {
  a: '-0x6EF756665E507DA592BCBC8E91CF6F4CDDC8B4B94E7574B29D7',
  b: '0x482E9607181C99D184419C42A500142398AE34731B2',
  r: '-0x3EC13085B44E3F3143FF454BDC3514C412FC3326957',
}, {
  a: '0x724415115F767F9A31CB194651C06512D32CC5D98EE65BB64BB7CD',
  b: '0x18CC202',
  r: '0x1531C07',
}, {
  a: '0x2C6AC0018FF6DCB283E58C1A67ACE103BF06023081DA5E5E2F421EC',
  b: '0x2F772F9B5993C70D79CFAE1BF5A',
  r: '0x104A6A1AEDB1CBB0FA8ADB61EA8',
}, {
  a: '-0x3DBF93F65366AF254B318065022DA9F2AF3F5CCDD147',
  b: '-0x53DBA1782596C8727D246',
  r: '-0xE17336D64FF96F9A7D7F',
}, {
  a: '-0x7FCE29F9E300B01472A74F1BF737DA73C7D8CA2162CD14EB566A141',
  b: '-0x2A653',
  r: '-0xE497',
}, {
  a: '0x667F3A96F00107F54254243D890319CE119EB9FC7A21964A5',
  b: '0xE5FEC2D8A7D5D352C219FA3D5F83E0',
  r: '0x24F0843E331CECEDC77076CE0972C5',
}, {
  a: '-0x60BF54675C8777ABC0544922D8E5DD45F48580B0B008549CF912C75BA7E8062B',
  b: '0x37E95D7082937073231DFDA978A6B2F568F8648',
  r: '-0x4FCF4B6544C608388588DA3576D74D4F54683B',
}, {
  a: '-0x973FFC9028A70F32463FF78378AF971398076F87F37E95C70A7',
  b: '0xFA7714E95819398EA377FBAC8A807',
  r: '-0xD1C5083E9C05D1612E8C4E1817A77',
}, {
  a: '0x12C8086164CE8A1B70B6D02406C57E963C0CF57F158039C7CB924B',
  b: '0xF517F6856865BDE1289A9DFA51EE3F6FAB1339',
  r: '0x7FF9AF7B7463B38B7880BAFF19EC8CB4C40609',
}, {
  a: '-0xEA8BB4BBA812E8BB08A454715F22FAE92F628B85BC19',
  b: '-0xB3DE3E446E38',
  r: '-0x39598F3605B1',
}, {
  a: '-0x8F099A41CDF83B9C055E16D311214876B633ACB0753CD60E8A7E6647',
  b: '-0x599621ADD942DDFB1C061EDB8BFD53257F286',
  r: '-0x112E81EF64CE484578E544A665F74F4F719E7',
}, {
  a: '-0x4BEA1C78A725388965C5B2FB5ABA8B8ABE1E31A788C7574F2427D2',
  b: '0x81FA402FFD8F4177B1E5DEBF2ADDCB9BAEF36',
  r: '-0x1C7EF3277B33E2E55F8D60F1DF7DEE052C56A',
}, {
  a: '-0x1904A1331C1F8344E0F453F0E0997F35140AC16672588A2E1BA4C45D2EFBC72',
  b: '-0x4DF691B33EB339B509B1C55190DCEFA6B12CC27',
  r: '-0x41DBC7B6CE2D6234DA1CB97C102C0C461EBB3A4',
}, {
  a: '-0x334A696E6933D6968433E5048019DC205E8FC0A7C7B1',
  b: '0x7893F03EA3DCE6BCCDBAB',
  r: '-0x2D5ABFC33A4BDC447A335',
}, {
  a: '-0xEB73854FCC7548708BD6465EA7D06BD5CEBB5832744AA658F68',
  b: '-0x450BD0592',
  r: '-0xD12D1DC4',
}, {
  a: '-0xBA9A4A3901010602D254DE3B425AD58D66DD5361FA0A5D87CBF6DA9644',
  b: '0x445B51A8F1FA72A6F72128FF8E321F5F19974AEFE62',
  r: '-0x2A1A46FA167C797412C42B4F222132F26C0069CB6C',
}, {
  a: '0x400424F508EC50A1BAB84327571AF908C43280DA2DC939E738334015E3',
  b: '-0x9280E91F2D4F4880C170CFF083500C87F34880B1',
  r: '0x360840D735A4E39D7292ED2B00F51128A19CF92',
}, {
  a: '0x93150CDAC3CF65B423FA30CFEA10A0AF3FFF6D4F71CC37A80F7E0BAF3C76627B5AA9',
  b: '0xD4D68FD4C3BD0A9A91477E23258B',
  r: '0x62CC6E4C676FDB11429CEF5D2C24',
}, {
  a: '0x697835894AA61160CA2D4D2F9B3F87FAD05B94B26FCE37ED725CE19D11E',
  b: '-0x5915A7CCE7571A3028D0D5',
  r: '0x231550407E8F2D1C1243F2',
}, {
  a: '0x20810E5E9357322B18EB3609A5D652F719A7D04609655D52809F42451E7B60B40B',
  b: '-0xC98656CD6204F',
  r: '0x9CC5C2A3D2A0B',
}, {
  a: '0x9194FE3672EBC887A8601BA56CAB3191984AE2846F26A91D917826B2',
  b: '-0x42B18EE2B1DD719FEA9D8390BB8520A8854BDC',
  r: '0x35BC2A52D12C975B792E2669547718EAADB452',
}, {
  a: '0xD907CE481BAFC6F6BC72B6D25FB4BA56A7EB95587A2F7F239B4E6C6561BB4A4',
  b: '0x2D0FB74CA609409A6FB0CFFA3C7',
  r: '0x1129C7408619C967BA7BF54CE03',
}, {
  a: '-0xFF40AA180B1CDD35D3A86D4671A3163F507867089C209D0737617FE50B73A',
  b: '-0xB7',
  r: '-0x25',
}, {
  a: '0x6551BEFF3C4EE951F0006BB44D45757CF86EBA643F58EAFBC61',
  b: '-0xE6038505308E105DD3C045833808FB4C2C',
  r: '0x4FFE34A6FB7000DA70F6EA6660A60CB745',
}, {
  a: '-0xE1DBBAF320542CBD442EB3061FC1888D6CCDAD56A27610A8A877',
  b: '-0xC545ACAF51EF856E0309EDDB69B27B9E2',
  r: '-0x2D744734C8FEDE4BAF9FE75A7AA220CF7',
}, {
  a: '-0x9DDCFC0821A30F8764754FEC099127A8542B79DB1EFC',
  b: '-0x1B21C6C3CC7C5BFDA1B4440',
  r: '-0x1A396E3015A6E908FDEA53C',
}, {
  a: '-0x3F6C20A89FA007945C007496C6FC038BD644DD1300295AFED3411D48207E8A1',
  b: '0xF04B3E48BD8A9F403D12DF78037262F010594',
  r: '-0x1B8EB4F6C162EA8B68B486F1FC58209844E75',
}, {
  a: '-0xAD5232735ED334E043A92432A6887BAEA49ED068845F5D45432D1E5C748F',
  b: '-0x60C53CEB1',
  r: '-0x1A2091BB2',
}, {
  a: '-0xE7569403D67DC21524668665E0F2601B9DFAB32A3F793B4CDFB006A52',
  b: '-0xDB761',
  r: '-0x67AB',
}, {
  a: '0xC051C3DF5F80640F932007A710B30AB784B90F1EE5094',
  b: '0x8DD3E189387BCFDC1D1F591DACAA6E05A1CF',
  r: '0x539A4D6E6C9683A4DCC15852133D718ECC82',
}, {
  a: '-0x787458AD5E579852A1F23797F217CCEBED04D1905CCABD6E9CDB7E317F5D651CB35',
  b: '-0x82C5B575505F',
  r: '-0x4448A7295E08',
}, {
  a: '-0x1D70A2C6A4F723716634BACD61F0380FA198D661A0B653C7',
  b: '0xB315547',
  r: '-0x5D97515',
}, {
  a: '-0xD91AC681C8FF118AFCE7E9C2C0DBF302A15EFC61FD',
  b: '0x6AB73A3A4A11D1CBC5FDCC0AF1048E66',
  r: '-0x2C748264C6A069A03C122C3B909FC02D',
}, {
  a: '0xE7F49223AAD1F29AC0E5ACF4338C66AEC6ADD5A580E2D4D36D6847F54F',
  b: '0x133A66A3DFCC1DC4',
  r: '0x11849E93395FA03F',
}, {
  a: '0xB22345CFC189B710E6A513D6FE4C92E91FAC51C788',
  b: '-0x72BBFECE74E6CC9CB3354D5ABE87D4CC488C28E5',
  r: '0x35BBA9963FCBC1E4BB6AE144D3EDE8532AF65C67',
}, {
  a: '-0x63EE719752643995003F1F40713E8645C5EDAA8C9368DF078EDEC0F',
  b: '0x55F838491F8CAD5CCBF729F65080C9328E4FD568B2924B9A2',
  r: '-0x3A916E55F061D49DB34F75E00ED8B4BA33EE434C3530E9D11',
}, {
  a: '0x2D3FD1E55B49ED75650CE55CBD97FF94069E0F071B08E2A2FE1B08B8',
  b: '0xD4BAA120E1AC69B328906DF126D40F7AB212E4BFA7',
  r: '0x2F50C45465ADC26E6B28977732B7E0D7640E9734A7',
}, {
  a: '-0xB8622E77BB0B0B9FBD0367D563036C85549A28CC1FCB8AD6EF52EE521BC60C8AADE4',
  b: '0xB0CA938DD325',
  r: '-0xAACEAE1477C2',
}, {
  a: '0xFDE1F5882188E69BCBFDF5D4789CC00A5FDF2F5C39255C8DCF26E1F06BBDC5C0C4',
  b: '-0xF12763AB2A',
  r: '0xEA214F3384',
}, {
  a: '0x174900BCD005E9E0073A576C402B34794C95529C248A02A9D49EC7BE53AAF01E99D',
  b: '0x8F93677B0540CD54991259EDF8EA9CF1',
  r: '0x2AB434F8ADE76A224093333FEB2B4DDB',
}, {
  a: '-0x2E3529F81D956D4A3D486136173BEA2C55C17E4E3747DCD',
  b: '-0x9E8D2D9E1093F7116B3824C8',
  r: '-0x4FFC21B6D81C4CBEE0DE94ED',
}, {
  a: '0xDEFFB75BE43E83637BCFCFDDD53D0BC0E585BBF7FB27257EE3D066CF6',
  b: '-0xE4F5F34A7EEE8D6D8D3C3FAACAEF',
  r: '0x52A61203F39456B86264B082520B',
}, {
  a: '0x50472D588079F7E9CDBA0A7BDA9B85CDE812E3D0012A1A4D66A7AE3',
  b: '0xFD9C16E043B85AD2BFC6',
  r: '0x64E11581A877DDE38543',
}, {
  a: '-0x25E12AE9E23177CA2EAC30DD75B56AB682A6D058DA',
  b: '-0x2EB',
  r: '-0x274',
}, {
  a: '0x184A76E6EB4B5D61B5DC2A31EB104BE633F80E5E1F',
  b: '-0x9B93002B9343BA92E',
  r: '0x73E570B3177AAAACF',
}, {
  a: '0xE6DABB7F52DE0F572114C7063CEB661D058C2B45AA567A885F',
  b: '0x8AC5CC90C4B0AA438F9ABDC90E8699C98A7F62D91599C8',
  r: '0x35B96CA3379511659C2DF73581411D895B38D397224EF',
}, {
  a: '0x6BA909F8FF9B74BD5D9AEDC6F9D03B68D078555491DB298167057',
  b: '-0xA4BF38907A0DF78FD',
  r: '0x1A7BF8257F4614B05',
}, {
  a: '-0xACD931D4DB8C6D82A400B9A1CBB6967790E5D8492445D60F8174C86D6',
  b: '-0x5',
  r: '-0x3',
}, {
  a: '0xEAC626595B844A53CE902CA5D5C80ADABAE6C9E119FA71E32C19E343FDDA3671D32',
  b: '-0x8F4FE576BAB048CD7EBCDA2B0B873547AD',
  r: '0x4821A0436D72E9D6408AA1E2ABE9049EFD',
}, {
  a: '-0x39807924AAD0F86BE3CD862B5F2E99B657602E45F82B34371BBC',
  b: '0x83CE7A0427D8C50C1DBE9A4BB0F97C2A448BF15',
  r: '-0x1F414D8214D24121F5B5F1843CEA69C9B7C84C9',
}, {
  a: '-0x8D91F8B6C829BE43D4497B90734F920D02F433E04DB3240D0BBD718BE0',
  b: '-0x27187BFC086',
  r: '-0x59C68F611A',
}, {
  a: '0x738EE8E456E42939B49015648A7A9497465D1BFF34DAE',
  b: '0xE0635B7D5CAD9BA5F582448FC17D',
  r: '0xAC99E96FF93FACC48AD2BCEE6763',
}, {
  a: '0x48E3EC65872A5520027522990E5EF972A8665A5D3562',
  b: '-0x7BC89BC878',
  r: '0x4F8A6BFC9A',
}, {
  a: '-0x97A14E8B7F3BDFCC4A5B3343F839A8FE438421A11B4EC2C9',
  b: '-0xFC7554918C6055E913A6F66EA0CFA',
  r: '-0x99D03926C455706FF2786D6E9BC4D',
}, {
  a: '-0x26C935B7B8A1A563697042D5F01D3102B71FFAC6E80385D2C9FE',
  b: '-0xE1E82B88AA017',
  r: '-0x4958030ED7E66',
}, {
  a: '-0x2EAC68AA7592E1D4F5B9BDF21E6F24E3BC97C650E071C658E100A296F4',
  b: '0xB3E46632B8CA0B65A63C45906CF8D3024F',
  r: '-0x1D7835A09FA1CB051434C11B5DC5C9A038',
}, {
  a: '-0xEF787DB17C41C2294C504042925B79C9AF5E20BC9421D75E64181F',
  b: '0x2C118BAF089428468C3D2613C36628E2412AD19991AD7B4',
  r: '-0x23E49A5BAABF2D4D23E4BAA2E0B126DB28FAA0A53291F1B',
}, {
  a: '-0xC0E61FDAB4668660533D09E329A91AB24C38FE7784B5348C1F24BCF9829A91C',
  b: '-0xD3787D8AC2FE86C2F009762CD1E67ED89E0',
  r: '-0x6F37C8D1CCAC9F70669C9ED7F6A071AFB7C',
}, {
  a: '0xE06409AF604CF2CF05634E897F4CA2D5D09BC517BA5C',
  b: '-0x110B6D9893D577CFE8F62E7C869852',
  r: '0xA0D6AF4DAA7F22746BCF864EA844C',
}, {
  a: '0x58D8D2DCE0048F21D892E5A35BB65C4AFB0FC34216CC4CF09835',
  b: '-0x699',
  r: '0x356',
}, {
  a: '0x970A8D9103F47883F3EA7D5B799EF4DEDA62DE928432B4226A0BF7FA67842050136C3D',
  b: '-0xD6DDE8E94CC3',
  r: '0xE66ED5D0585',
}, {
  a: '0x86736923059FFA840F0458F36DB935F2FB42AF4C3EC432AAFCC83',
  b: '-0xA8E266715E80200629120438DBEC63DA43320CCE',
  r: '0x1C6C62EDCC7F913DB306E6DAD53ABC81BB87669D',
}, {
  a: '-0x3CE99F9CDFB571F75A4829E934227F08FE9542A46EB',
  b: '-0x1B8003D91F0C2CAB2C3D577F9DFEDB4CAE361',
  r: '-0x1D4E409F2ADFB2A270739E9E9C32F553BC85',
}, {
  a: '-0x238B5D4EFB36C1664C8014F2E2BADA89AC2E4A3BCDC700A',
  b: '0x37B3F779ADD',
  r: '-0xD63AE1150D',
}, {
  a: '0x962731F9769F15DB654648D59B8F9EB1EB07E337B5214280246901F4255FFD98BB02',
  b: '0x94B21164A48815DA667AC13563786C7573D',
  r: '0x2792990EBB875F19EF5D2541FD782917AC0',
}, {
  a: '0x4FB007779C7EC10CC85B30DEBA54C0642D9E0CEFB0BD0F6B96',
  b: '0x92DEE9B81EDDC521E806',
  r: '0x35C7FE4B4FE0DF70F86E',
}, {
  a: '0x366329A3B4615E1ABA9A89B27661C70238778E640C9EB04EB655832D8E09',
  b: '0xE4ACDDE5078E3C20F81E7EB18552BA4196',
  r: '0x9B33E978230D462B7B99F9CDCA9E10E669',
}, {
  a: '0x459951652FD01C2F05948216B110B07F70099908D9A627C9577A6A90',
  b: '0x40258ED477450FF4921BAE2',
  r: '0x1DE44EB29DEEBB3BF37C8D4',
}, {
  a: '0xFBF568E48D3562914B912DB579A730B5F77F86F5FB6D9D9460B',
  b: '-0xAF074397D832945B7C2A53B2',
  r: '0x7BCFB50AE721B512CD04240D',
}, {
  a: '-0xEB73237B473BA9C7314D14B07EC9C089A5CB43D7C92',
  b: '-0xF6C',
  r: '-0x8DE',
}, {
  a: '-0x6E71918A7C47340E73832101962DF3C7C3C344B9AB003420DE8556',
  b: '-0x3C40063AD9EB76A9FBC1F03DE3927D791FFF84B',
  r: '-0x13DB59E32BD3EBE0033D7A18405AE43E8908589',
}, {
  a: '0x377FA77EEB82BC324787973EF667286B7AF343109C4ECC05F03611D82EAFF9',
  b: '0x6EFAE345C0DA1CA24CA',
  r: '0x62D8BFB48D3A9A098D5',
}, {
  a: '-0x1FED3EE5B5945CE32B2E020141A6DE8A41C9CD80E6ACEF1DBBDB72',
  b: '0xB97',
  r: '-0xA69',
}, {
  a: '0xF0D1F539A8D16E00E4B58134630C9C44F9B3BBD1A33B',
  b: '-0xF0C3144DDFB58E3A190D149A595C22D4D520E79',
  r: '0x1DF180C7E5FF2B1C07B33E7D46F3DCD6A2955A6',
}, {
  a: '-0x24E442833401CC02E64AD09652FEB9521F039345056BFA72D36F36DA',
  b: '0xAA5748',
  r: '-0x8822C2',
}, {
  a: '-0x10FE94C8A0766E57A52894588384A5853EAECBA3874FE014E7821A12E30',
  b: '-0xFCCFA',
  r: '-0xA0FBC',
}, {
  a: '-0x5598895CEB989630B049892C5C46C4A3FE15E4463F9142B1EF66C51F64A2E6B',
  b: '-0xC83F53747',
  r: '-0x2EE754A82',
}, {
  a: '-0xA926341F430C5651E7A7F7BD4CAAF35521FD15A33C2C59B08A396C8E58A1AFA0B32',
  b: '0x4',
  r: '-0x2',
}, {
  a: '0xDAE1C7657E3F1A548ADFB824C57AEA4E274E23A38F8E577371203097C6D5B3F',
  b: '-0xC3FF614D2991605C20F02CB78D0A420250CB8883',
  r: '0x91AD698998C877C514FFB675F3CFCA2FEF10D2BD',
}, {
  a: '-0xADB1FB19FC1EA48F413FA0892D798FACD1C1F807C9326DCEB532097E',
  b: '0x68CB7E42D5A50A0E',
  r: '-0x5DBB9581D76FCA8E',
}, {
  a: '-0x196F7B257B7201AD4F3D4F82AF359F4F503CB80F41589E',
  b: '-0x5854969EA25A74A61',
  r: '-0x3114BD803E9FE70EF',
}, {
  a: '-0x1FB61120109F6AE57D66E2340B597DAA80E50AE490707DD93EC40C3819ACE48',
  b: '-0x703D718C1A15167C',
  r: '-0x55892C056B0AE80C',
}, {
  a: '-0x3A3CABCAD402677909A469085FB809A09CC0666A1C383A4FC8DA5C1E05B751',
  b: '-0x13FEE546AFA',
  r: '-0xD9D042D4CF',
}, {
  a: '-0x2D43FBF7B4E8413E4B511B6998463965D4A5B2FDB58B0FF2721',
  b: '-0x72EC0FB21D6A132A027278332',
  r: '-0x20D123A5EF016CDC8E3BE0DE9',
}, {
  a: '0x406785B6CEE782CF840A86513B4BCFA1B70B62496700A6D3030B23EAB966DF604',
  b: '0x272F5129332E7C80',
  r: '0x12F829E7191FF404',
}, {
  a: '0x1A40857B816806B3CD992847353C52445FB99894660CBD7D23793FD',
  b: '-0x1150663024AA4E9AA5ED5D77D0158C',
  r: '0xA724E9BD98A257974FE8AFAA12D11',
}, {
  a: '-0x4E0BBDB48CF19AE93C81204C591863C04C8F8C12F70724E91',
  b: '0x843B8E7EF7F31CB0CBEB4EA1B',
  r: '-0x4253BD1747A37E047925D41AC',
}, {
  a: '0xED41DBE92128445022F6DB707B982E362FCA10D247F768B19976AA253BE8DC606D4B7C',
  b: '0xA5B8A12FC9F7AB77158',
  r: '0x5F3C1F385779ADBF77C',
}, {
  a: '-0xB7A8A6C11ECF503CBB966C0584F078EB392E536A009ECB917207AA72D',
  b: '0xEC0E68105052967B72DA788049FB222CBA',
  r: '-0xA921251EFC3AFA50756A00EFEF594B10D9',
}, {
  a: '-0x5129CF3458814B3DEFF3BB04A458B777B82A09D24E',
  b: '0xB5C4870504A799A66B6AC3',
  r: '-0x1C2EA95216EB638D815BD9',
}, {
  a: '0x69E5141C58C3F044FEFB7ED6D2664287A9A9379E09CB74682F13B',
  b: '-0x484CD5B1FFF7AB1F165B00C7ABD406B5AA',
  r: '0xF58430E05172DB380899365725945544F',
}, {
  a: '-0xCBAE6F493AACCFB9C306ED62168848031534CC014BB384AE592F75EB2',
  b: '0x5ACFC33',
  r: '-0x2A7BBEF',
}, {
  a: '-0x52199171BAB3B508BAA36F1219FF2C88C178D48E10D14F',
  b: '-0xACEE67',
  r: '-0xA34B6A',
}, {
  a: '0xAA458A05FB039FB201FF8446CBE98F8D237D113E45DF43902B4411D92D7DFF5A63A',
  b: '0x3F2C753FCFCF675E9848DE49338',
  r: '0x390B6827C7B194D0F8333162D8A',
}, {
  a: '0x1F4EF303FCC36D69C5FF377349B0C1FA93D13A337650EB0ADC6DC62F4617B7DD764',
  b: '0x2EDCA435F2B8EBA7D7FF37C07FCD7D3D4C24AB0067',
  r: '0x1C6057678EC891049A61A64C8EC7FAA462B0BD6166',
}, {
  a: '0xB286261AC3CC14FD4CCED4066E7754C5411CD55A003E',
  b: '0xC7DE1B3472CC89D924E631492C8C23CF707',
  r: '0xA1061491C4703F6EC8D0CAEFD549FE02EDA',
}, {
  a: '-0x2AD9F87C26972523CF2FC646FD1B668779C5D50FDA6D6E29E0AA2D2F4FA3ED',
  b: '-0xBDD069DA55A7E',
  r: '-0x431D927182667',
}];

const dataSmall = [{
  a: '0x7771D4F4D870C',
  b: '0x2FD8511582',
  r: '0x1E50B179AA',
}, {
  a: '0xB4F4CED471',
  b: '0xC043F956A',
  r: '0xB515133B',
}, {
  a: '0x7526490DBC77',
  b: '-0x45B94B88C0',
  r: '0x90C2E09F7',
}, {
  a: '0xADBD591CF478',
  b: '0x9FBAB',
  r: '0x3D716',
}, {
  a: '-0x2D4B40D310B85',
  b: '-0x3',
  r: '0x0',
}, {
  a: '0x75A31F24D',
  b: '-0xE34DC',
  r: '0xB2E1',
}, {
  a: '-0x23B37BF650',
  b: '-0xDFF3653',
  r: '-0xD7D9AEC',
}, {
  a: '0x7861148E78EF1',
  b: '0x3DE30D65',
  r: '0x1A6FFC32',
}, {
  a: '-0x78CD49ECC789C6A',
  b: '-0x110000F23',
  r: '-0x1CC3E5F4',
}, {
  a: '-0x5DD39B10A9C79',
  b: '-0xE07B3',
  r: '-0x12F04',
}, {
  a: '-0x23DFFE5DF8BAE',
  b: '0x80',
  r: '-0x2E',
}, {
  a: '0x6926411BE7',
  b: '0x8AF5A37382',
  r: '0x6926411BE7',
}, {
  a: '0x9BE974016',
  b: '0x621C9',
  r: '0xE4FD',
}, {
  a: '0xBC3CE96CAB5',
  b: '0xB9152D1',
  r: '0x2AF70C8',
}, {
  a: '-0x6158AD1922E9B8F3',
  b: '-0x75B',
  r: '-0x746',
}, {
  a: '-0xB429A50090D16',
  b: '0x4A0697B963',
  r: '-0x399C468E46',
}, {
  a: '-0x633DC619712',
  b: '0x24EE',
  r: '-0x14E',
}, {
  a: '-0x7AD38B8E4B73B',
  b: '0xCC561FD',
  r: '-0xB98CA06',
}, {
  a: '-0xECDB714286C36',
  b: '0x6DE0CD131E',
  r: '-0x35137C1A90',
}, {
  a: '-0x442B7CC0A',
  b: '0xF00F7',
  r: '-0x3A84C',
}, {
  a: '0x601076C471D1F7',
  b: '0x58D90',
  r: '0x47987',
}, {
  a: '-0x6FFE386F5',
  b: '-0xF1',
  r: '-0xAD',
}, {
  a: '0xCA57D44F579E6',
  b: '0x20656844D73',
  r: '0x1ED371A060C',
}, {
  a: '0x89E9098AC',
  b: '0x1264',
  r: '0xCB4',
}, {
  a: '0xA43F9ECC12A2A45F',
  b: '0xAB49CF',
  r: '0x14624C',
}, {
  a: '0xA681AFDEFCCA',
  b: '0x2523DF3',
  r: '0x1201C2D',
}, {
  a: '-0x7CDE635722BABA48',
  b: '0x55CB3D',
  r: '-0x13CC24',
}, {
  a: '-0x914A45C9E1517DB',
  b: '-0x956A',
  r: '-0x4381',
}, {
  a: '-0xC35CD7CE9',
  b: '0xC57EF22DEC7',
  r: '-0xC35CD7CE9',
}, {
  a: '0xC30202B9FD42',
  b: '0x4321A7E3A02',
  r: '0x201400B90E6',
}, {
  a: '0x8FDCF440F3FCB',
  b: '0x49807BB9688',
  r: '0x4821F1A7A3',
}, {
  a: '0x6F2741A93',
  b: '-0x18BB1',
  r: '0xF419',
}, {
  a: '-0x51750BDDEBEA83',
  b: '-0x4F7E2AAFB',
  r: '-0x37F142796',
}, {
  a: '0xFDA4B68A2971B3C',
  b: '0xB6B',
  r: '0x61',
}, {
  a: '-0x99445E02FA',
  b: '-0x1B608418F4',
  r: '-0x1061C98636',
}, {
  a: '0x5B1D7F68F9253D',
  b: '0xE53F603AD',
  r: '0x1894916A5',
}, {
  a: '0xCF46215D8EFD3DEF',
  b: '0xFAF9FBC3',
  r: '0x3A6A144A',
}, {
  a: '0x7E7F7B23352A',
  b: '-0x9FCD66BF',
  r: '0x68AD460F',
}, {
  a: '-0xAD183FAEE9E8',
  b: '0xD9663066F',
  r: '-0x39445F5F5',
}, {
  a: '0xFABB06968CA87C',
  b: '-0x50AC0B539C2',
  r: '0x253E2D28F88',
}, {
  a: '0x691C26F36913',
  b: '-0xAD31',
  r: '0xF16',
}, {
  a: '-0x27027BD1B8D1',
  b: '-0xA036',
  r: '-0xEE9',
}, {
  a: '-0x56A9E241670972',
  b: '0xA456BB14D',
  r: '-0x6C92A458B',
}, {
  a: '-0x13E73F115CD98E2',
  b: '0x65',
  r: '-0xC',
}, {
  a: '-0xCB50CB87AFDA',
  b: '-0x243B8E',
  r: '-0x1E7626',
}, {
  a: '0xD5170127E4651C',
  b: '-0xF',
  r: '0x3',
}, {
  a: '-0x6F429520C0E9',
  b: '0x4100',
  r: '-0x37E9',
}, {
  a: '-0x8058F60C5',
  b: '0xD87',
  r: '-0x3B3',
}, {
  a: '0xE89C78EC980',
  b: '-0x154A0486FD',
  r: '0x11787B098A',
}, {
  a: '0x8C9AB758C6E2E815',
  b: '-0x6977A6566',
  r: '0x4DD630263',
}, {
  a: '0xEE3C1B0241',
  b: '-0x47DFAC',
  r: '0x2ACFDD',
}, {
  a: '-0x3F9ED3FD6',
  b: '-0x56F46941',
  r: '-0x3D6CBA0B',
}, {
  a: '-0x2FB011BE4EF97C58',
  b: '0x9BBD9',
  r: '-0x7FA9A',
}, {
  a: '0xC6AF1F30E59',
  b: '0x7D2C5',
  r: '0x6039',
}, {
  a: '0x76E5EA5C20AB78B',
  b: '-0xFFA4B0F77BD',
  r: '0x61CE06A60BB',
}, {
  a: '-0xC86E9CED5D',
  b: '0x1A915A8',
  r: '-0x192F33D',
}, {
  a: '-0x38FBEBD37BDD8C2',
  b: '-0xD2',
  r: '-0x18',
}, {
  a: '0x30CE0F5B722',
  b: '-0xE49A0A620DB',
  r: '0x30CE0F5B722',
}, {
  a: '-0x9C0C272B315BB5',
  b: '-0xB57',
  r: '-0x7A2',
}, {
  a: '0x773C0E4B6A065E',
  b: '0xCBC4F32F',
  r: '0xAA8045CC',
}, {
  a: '-0x495BF444C8',
  b: '-0x35DD7AD',
  r: '-0x136E546',
}, {
  a: '0xACDAF9D6BCB6C91B',
  b: '0x81759ED',
  r: '0x7787489',
}, {
  a: '-0xDB80A522426',
  b: '0x7921A41D6',
  r: '-0x6CCD5121C',
}, {
  a: '-0x1451577A8B9F6',
  b: '-0xB23CBE2058B',
  r: '-0x2075F0E1937',
}, {
  a: '0x7EDC6A0171E',
  b: '0x2',
  r: '0x0',
}, {
  a: '0xAD6C2E5229CD2',
  b: '-0xFA734875',
  r: '0x2413A407',
}, {
  a: '0x3BD9FDDF8D20E4',
  b: '0x26',
  r: '0x4',
}, {
  a: '-0xC65CC230875F5845',
  b: '-0x6F9',
  r: '-0x496',
}, {
  a: '-0xDD4BC5B325',
  b: '-0x21AAF0D740',
  r: '-0x134A20A7A5',
}, {
  a: '0xD67AFBDB27',
  b: '0x8854',
  r: '0x603B',
}, {
  a: '-0x65D9453FDEA6A',
  b: '-0xAFD3C13375',
  r: '-0x6E49DD2256',
}, {
  a: '0x994D4C7853D785A',
  b: '0xB9AC368',
  r: '0x991B662',
}, {
  a: '-0x10AB607E5DF492',
  b: '0xBD6FA4DF259',
  r: '-0x51080C1276A',
}, {
  a: '-0x8C6126B3A2EED',
  b: '-0xE4DD',
  r: '-0x8573',
}, {
  a: '0x744174C52F',
  b: '0xC87BB2DA',
  r: '0x59F15F27',
}, {
  a: '-0x496289A122F',
  b: '0xE',
  r: '-0xB',
}, {
  a: '0x39C0AA0ED1',
  b: '0x16A',
  r: '0x129',
}, {
  a: '0x5CE632A89FD8552',
  b: '0xA5A290ED21C',
  r: '0xA1B860E6922',
}, {
  a: '-0x9C3C834C7023',
  b: '0x1F',
  r: '-0xA',
}, {
  a: '0x313DA0B83B05',
  b: '-0x5D5DEFB09B',
  r: '0x117521948',
}, {
  a: '0x3F4EDCE28F6EF77F',
  b: '0xA94C',
  r: '0x6D23',
}, {
  a: '-0xEAB55E61C98F8',
  b: '-0xD8020',
  r: '-0xA4658',
}, {
  a: '-0xFB333E80B4338',
  b: '0xB7E15FA49D',
  r: '-0x6942B88FE9',
}, {
  a: '-0x745A714754D4B2D1',
  b: '0x5256C6E31A',
  r: '-0x9D181DF05',
}, {
  a: '0xD717F2F18035',
  b: '0xBF',
  r: '0x48',
}, {
  a: '0x6DC14319909EC2',
  b: '-0xE4',
  r: '0xAA',
}, {
  a: '-0xAF94CA06C6C64C93',
  b: '0xF4',
  r: '-0xCB',
}, {
  a: '0xE7978A69BE0801EE',
  b: '-0xC655EF21',
  r: '0xA37A048F',
}, {
  a: '-0x93E3301EF39',
  b: '0x5FDD6D',
  r: '-0x3EA0C',
}, {
  a: '-0x7B061FDFF43',
  b: '-0x15DE0',
  r: '-0x92A3',
}, {
  a: '-0x3037870A40',
  b: '0x95079E0C',
  r: '-0x7B166A68',
}, {
  a: '0xA84DFE9698B0AC',
  b: '0x642F12F1',
  r: '0x60FC970B',
}, {
  a: '0xFC721DE677573',
  b: '0x2CAA4D',
  r: '0x211473',
}, {
  a: '-0x736E3212DB',
  b: '0x882D83E2',
  r: '-0x87CACC2B',
}, {
  a: '-0x7D32582C5F',
  b: '-0x7AAEC9A',
  r: '-0x723D671',
}, {
  a: '0x3787A6E57',
  b: '0xCA92E464',
  r: '0x4E2EDCC7',
}, {
  a: '-0x557B7C732216063',
  b: '0x4E',
  r: '-0x23',
}, {
  a: '0x981EF3F9EFACF',
  b: '-0x61B529FE',
  r: '0x14AE80EB',
}, {
  a: '0x80CFE2C6CEFC934D',
  b: '-0x7811ECFDC20',
  r: '0x3AC59472C4D',
}, {
  a: '-0xE4CA3F637D801',
  b: '-0xCD8779233',
  r: '-0xC3BA1066',
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
    const r = d.a % d.b;
    if (d.r !== r) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: %');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a % d.b;
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
    const r = JSBI.remainder(d.a, d.b);
    if (!JSBI.equal(r, d.r)) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: remainder');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = JSBI.remainder(d.a, d.b);
    }
  }
  // Confuse the compiler into thinking that the loop is needed :-)
  const d = data[data.length - 1];
  if (!JSBI.equal(r, d.r)) throw new Error('no dead code elimination please');
  return Date.now() - t1;
}


const kRepsBig = 10000;
const kRepsSmall = 30000;

console.log('Testing remainder:');
console.log('Native/big:   ' + testNative(dataBigNative, kRepsBig));
console.log('JSBI/big:     ' + testJsbi(dataBigJsbi, kRepsBig));
console.log('Native/small: ' + testNative(dataSmallNative, kRepsSmall));
console.log('JSBI/small:   ' + testJsbi(dataSmallJsbi, kRepsSmall));

if (errorCount !== 0) {
  console.error('Finished with ' + errorCount + ' errors.');
  // Support both d8 (`quit`) and Node.js (`process.exit`).
  (typeof quit !== 'undefined' ? quit : process.exit)(1);
}
