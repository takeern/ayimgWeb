const axios = require('axios')

axios.get('http://api.bilibili.com/x/upload/web/image', {
  header:{
    cookie: 'finger=14bc3c4e; buvid3=1F694FAD-569D-4DC1-AEB5-BAC0B3CFA4441616infoc; LIVE_BUVID=AUTO3715375143690602; sid=co1u7pks; DedeUserID=35187566; DedeUserID__ckMd5=b7124ef6878dda2e; SESSDATA=463414a9%2C1540106379%2C157162c6; bili_jct=3fb8e633a84429d5317db414c49c17a9; stardustvideo=1; CURRENT_FNVAL=8; rpdid=oxlkioqmwdoskmsilpww; dssid=89qg4891d1e3ec39a; dsess=BAh7CkkiD3Nlc3Npb25faWQGOgZFVEkiFTQ4OTFkMWUzZWMzOWE3OTAGOwBG%0ASSIJY3NyZgY7AEZJIiUyN2JmM2E0MTNmYzI1ODY4NTMzYjI3MTMyMmNhYmFh%0AYwY7AEZJIg10cmFja2luZwY7AEZ7B0kiFEhUVFBfVVNFUl9BR0VOVAY7AFRJ%0AIi1jMDgyZDkxZWI3YWM5ZjkyODYyOTU4ZTQzMDlkNjdkNDNlNWNlZTNiBjsA%0ARkkiGUhUVFBfQUNDRVBUX0xBTkdVQUdFBjsAVEkiLTM1YTk2MzhjZTg1OGM4%0AY2QwYTNiMDljMmYwZjQ5NmMwYWMwNjViODgGOwBGSSIKY3RpbWUGOwBGbCsH%0AlkOrW0kiCGNpcAY7AEYiEjIyMi43My4xOTYuMTg%3D%0A--e31d9e1c8105ece13a0bab032c7521117bb8b604; fts=1537950613; UM_distinctid=1661fd5bbb53c1-056040502e05d3-346a7809-1fa400-1661fd5bbb68ff; im_notify_type_35187566=0; CURRENT_QUALITY=64; innermark=1; _dfcaptcha=5ddb7361361568e6722f5c7a77f42765; bp_t_offset_35187566=172851826411959949',
  },
}).then(res => console.log(res))