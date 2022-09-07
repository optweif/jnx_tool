

var samples =  (
    "002f4c55534552303150415353574F52443031202020202020202020202020202020202020202020202020202020202031\n" +
    "001f41313635393239373730312020202020202020202020202020202020202031\n" +
    "000b535300001b48eb57f77053\n" +



    "0031554f03d773d64649584e4554495820204200001f40000005154e47485400008ec60001869f000000002041000000003631\n" +
    "001b555503d773d603d773d700001edc00008ec60001869f2000000000\n" +
    "001b555503d773d703d773d800001e7800008ec60001869f2000000000\n" +
    "001b555503d773d803d773d900001e1400008ec60001869f2000000000\n" +
    "0042534100003a9e8efd423003d773d64649584e4554495820204200001f40000005154e47485400008ec60001869f00000000204102ce6347079fec03000000004c3631\n" +
    "0035535500003a9e8efd8c6803d773d74200001edc000005154e47485400008ec60001869f2002ce6347079fec03000000004c03d773d6\n" +
    "0035535500003a9e8efde25803d773d84200001e78000005154e47485400008ec60001869f2002ce6347079fec03000000004c03d773d7\n" +
    "0035535500003a9e8efe3c3003d773d94200001e14000005154e47485400008ec60001869f2002ce6347079fec03000000004c03d773d8\n" +
    "0031554f03de0b344649584e4554495820204200001f40000005154e47485400008ec60001869f000000002041000000003631\n" +
    "001b555503de0b3403de0b3500001edc00008ec60001869f2000000000\n" +
    "001b555503de0b3403de0b3600001e7800008ec60001869f2000000000\n" +
    "001b555503de0b3403de0b3700001e1400008ec60001869f2000000000\n" +
    "0042534100003b033501a56803de0b344649584e4554495820204200001f40000005154e47485400008ec60001869f00000000204102ce6347079fec05000000004c3631\n" +
    "0035535500003b033502071003de0b354200001edc000005154e47485400008ec60001869f2002ce6347079fec05000000004c03de0b34\n" +
    "0031554f03599ab74649584e45544958202053000003e8000005154441592000008ec60001869f000000c92041000000003131\n" +
    "0031554f03599ab84649584e45544958202042000002bc000005154441592000008ec60001869f000000c92041000000003131\n" +
    "004253410000331e44ad1fc003599ab74649584e45544958202053000003e8000005154441592000008ec60001869f000000c9204102ce6344b394572b000000004c3131\n" +
    "004253410000331e44ad799803599ab84649584e45544958202042000002bc000005154441592000008ec60001869f000000c9204102ce6344b394572c000000004c3131\n" +
    "001c53440000331e44ad799803599ab8000002bc4d000002bc00008ec652\n" +
    "001c53440000331e44ad799803599ab7000002bc4d000002bc00008ec641\n" +
    "001b555503599ab703599ab90000032000008ec60001869f2000000000\n" +
    "003553550000334b68fea29003599ab95300000320000005154441592000008ec60001869f2002ce6344b394572b000000004c03599ab7\n" +
    "001b555503599ab903599aba000002bc00008ec60001869f2000000000\n" +
    "003553550000336226e3c18003599aba53000002bc000005154441592000008ec60001869f2002ce6344b394572b000000004403599ab9\n"+

"0031554f030c580d4649584e45544958202042000003e8000005154441592000008ec60001869f000000002041000000003631\n" +
"0031554f030c580e4649584e45544958202053000003e8000005154441592000008ec60001869f000000002041000000003631\n" +
"0042534100002e835e91f428030c580d4649584e45544958202042000003e8000005154441592000008ec60001869f00000000204102ce6344b39438b7000000004c3631\n" +
"0042534100002e835e9259b8030c580e4649584e45544958202053000003e8000005154441592000008ec60001869f00000000204102ce6344b39438b8000000004c3631\n" +
"001f534500002e835e9259b8030c580d000003e800008ec64102ce6344b394087d\n" +
"001f534500002e835e9259b8030c580e000003e800008ec65202ce6344b394087d\n"+

"0031554f02c4c9674649584e45544958202042000000c800001a66444159200001c80e0001869f000000002041000000003631\n" +
"0042534100002a3f7430d2d802c4c9674649584e45544958202042000000c800001a66444159200001c80e0001869f00000000204102ce631d1ec9e751000000004c3631\n" +
"0031554f02e573644649584e45544958202042000000c800001a66444159200001c80e0001869f000000002041000000003631\n" +
"0042534100002c31e31ec44002e573644649584e45544958202042000000c800001a66444159200001c80e0001869f00000000204102ce631d1ec9e826000000004c3631\n" +
"000a555802e5736400000000\n" +
"0013534300002c7d190f4fc002e57364000000c855\n" +
"0031554f02f8d5744649584e45544958202042000000c800001a66444159200001c80e0001869f000000002041000000003631\n" +
"0042534100002d59a083712002f8d5744649584e45544958202042000000c800001a66444159200001c80e0001869f00000000204102ce631d1ec9e8ba000000004c3631\n" +
"001b555502f8d57402f8d575000000c80001c8040001869f2000000000\n" +
"0035535500002d7047076cc002f8d57542000000c800001a66444159200001c8040001869f2002ce631d1ec9e8bf000000004c02f8d574\n" +
"000a555802f8d57500000000\n" +
"0013534300002d8dd8f5ff5802f8d575000000c855\n" +
"0031554f02fdc9b64649584e45544958202042000000c800001a66444159200001c80e0001869f000000002041000000003631\n" +
"0042534100002da5491f9f9802fdc9b64649584e45544958202042000000c800001a66444159200001c80e0001869f00000000204102ce631d1ec9e8c5000000004c3631\n" +
"001b555502fdc9b602fdc9b7000000640001c80e0001869f2000000000\n" +
"0035535500002db03ac9221002fdc9b7420000006400001a66444159200001c80e0001869f2002ce631d1ec9e8c5000000004c02fdc9b6\n" +
"000a555802fdc9b700000000\n" +
"0013534300002dba02a108f802fdc9b70000006455\n" +
"0031554f02ffc1944649584e45544958202042000000c800001a66444159200001c80e0001869f000000002041000000003631\n" +
"0042534100002dc352fc256802ffc1944649584e45544958202042000000c800001a66444159200001c80e0001869f00000000204102ce631d1ec9e8c8000000004c3631\n" +
"001b555502ffc19402ffc195000000000001c7fa0001869f2000000000\n" +
"0013534300002dd1fe24b00002ffc194000000c85a\n" +
"0031554f0304020c4649584e45544958202042000000c800001a66444159200001c80e0001869f000000002041000000003631\n" +
"0042534100002e0421ba33f00304020c4649584e45544958202042000000c800001a66444159200001c80e0001869f00000000204102ce631d1ec9e8cb000000004c3631\n" +
"001b55550304020c02ffc19500000064000000000001869f2000000000\n" +
"001b55550304020c0304020d00000064000000000001869f2000000000\n" +
"0013534300002e1f1cb707c80304020c000000c858\n" +
"0031554f030d6df14649584e45544958202042000000c800001a66444159200001c80e0001869f000000002041000000003631\n" +
"0042534100002e93f4f07ad8030d6df14649584e45544958202042000000c800001a66444159200001c80e0001869f00000000204102ce631d1ec9e8f9000000004c3631\n" +
"0031554f030d92ef4649584e45544958202053000000c800001a66444159200001c80e0001869f000000002041000000003631\n" +
"0042534100002e9618c5cba0030d92ef4649584e45544958202053000000c800001a66444159200001c80e0001869f00000000204102ce631d1ec9e8fa000000004c3631\n" +
"001f534500002e9618c5cba002c4c967000000c80001c80e4102ce631d1ec9e475001f534500002e9618c5cba0030d92ef000000c80001c80e5202ce631d1ec9e475\n" +
"0031554f02269b164649584e45544958202042000000c80000270f444159200001c80e0001869f000000002041000000003631\n" +
"000f534a000020d1ce55c06002269b1653\n" +
"0031554f02548d344649584e45544958202053000003e8000005154441592000008ec60001869f000000c92041000000003631\n" +
"004253410000238ef073285802548d344649584e45544958202053000003e8000005154441592000008ec60001869f000000c9204102ce6321c6e1af06000000004c3631\n" +
"0031554f0254d7654649584e45544958202042000003e8000005154441592000008ec60001869f000000c92041000000003631\n" +
"00425341000023935d26e2100254d7654649584e45544958202042000003e8000005154441592000008ec60001869f000000c9204102ce6321c6e1af0e000000004c3631\n" +
"001c5344000023935d26e2100254d765000003e84d000003e800008ec652\n" +
"001c5344000023935d26e21002548d34000003e84d000003e800008ec641\n" +
"001d2b544849535f49535f415f44454255475f504b545f4649584e45544958\n" +
"00014f\n"

).trim()
        .split('\n')


export { samples };