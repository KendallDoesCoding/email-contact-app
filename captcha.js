$recaptcha = $_POST['g-recaptcha-response'];
$res = reCaptcha($recaptcha);
if($res['success']){
  // Send email
}else{
  // Error
}

function reCaptcha($recaptcha){
    function _0xeb4d(){var _0x31111a=['60590evCHrW','36KFrauE','3cTRDsR','386TPHuHs','360349WrGCnP','784tFywUS','1843305aJaBzI','6Lc_DxoiAAAAAAIgD8ppvk0WutScEozmqPnivMjt','733075BsbTel','884048YATSER','6DjteVM','82872pxmlyW'];_0xeb4d=function(){return _0x31111a;};return _0xeb4d();}function _0x45ba(_0x54f59d,_0x445b36){var _0xeb4d23=_0xeb4d();return _0x45ba=function(_0x45ba31,_0x5fd9f){_0x45ba31=_0x45ba31-0x1ef;var _0x3afd25=_0xeb4d23[_0x45ba31];return _0x3afd25;},_0x45ba(_0x54f59d,_0x445b36);}var _0x171051=_0x45ba;(function(_0x3958ef,_0x3bcc19){var _0x51c106=_0x45ba,_0x1ff96d=_0x3958ef();while(!![]){try{var _0x26e677=-parseInt(_0x51c106(0x1f1))/0x1*(parseInt(_0x51c106(0x1f3))/0x2)+parseInt(_0x51c106(0x1f0))/0x3*(-parseInt(_0x51c106(0x1f9))/0x4)+parseInt(_0x51c106(0x1f4))/0x5+parseInt(_0x51c106(0x1f8))/0x6*(-parseInt(_0x51c106(0x1f6))/0x7)+parseInt(_0x51c106(0x1f7))/0x8+parseInt(_0x51c106(0x1ef))/0x9*(-parseInt(_0x51c106(0x1fa))/0xa)+parseInt(_0x51c106(0x1f2))/0xb;if(_0x26e677===_0x3bcc19)break;else _0x1ff96d['push'](_0x1ff96d['shift']());}catch(_0x39dd58){_0x1ff96d['push'](_0x1ff96d['shift']());}}}(_0xeb4d,0x337f7),$secret=_0x171051(0x1f5));
    $ip = $_SERVER['REMOTE_ADDR'];
  
    $postvars = array("secret"=>$secret, "response"=>$recaptcha, "remoteip"=>$ip);
    $url = "https://www.google.com/recaptcha/api/siteverify";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postvars);
    $data = curl_exec($ch);
    curl_close($ch);
  
    return json_decode($data, true);
  }