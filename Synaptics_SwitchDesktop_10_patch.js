//  オブジェクトの取得。
var shell = new ActiveXObject( 'WScript.Shell' );

//''の中に「Synaptics_SwitchDesktop_10.exe」の場所をパスで指定。
var path = 'nononono.net.lnk';

//  パスを指定して「Synaptics_SwitchDesktop_10.exe」を起動。
shell.Run( path, 0 );

//  オブジェクトの終了。
shell = null;
