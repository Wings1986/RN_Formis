
import React from 'react';
import { Alert, Text, View } from 'react-native';
import WebView from 'react-native-webview';


///const json = '{"display":"form","settings":{"pdf":{"id":"1ec0f8ee-6685-5d98-a847-26f67b67d6f0","src":"https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"}},"components":[{"label":"Owner name","tableView":true,"key":"ownerName","type":"textfield","input":true},{"label":"Tenant name","tableView":true,"key":"tenantName","type":"textfield","input":true},{"label":"Description","autoExpand":false,"tableView":true,"key":"description","type":"textarea","input":true},{"label":"Upload photo","tableView":false,"image":true,"webcam":true,"fileTypes":[{"label":"","value":""}],"key":"uploadPhoto","type":"file","input":true},{"label":"Form letter details","attrs":[{"attr":"","value":""}],"refreshOnChange":false,"key":"formLetterDetails","type":"htmlelement","input":false,"tableView":false},{"type":"button","label":"Submit","key":"submit","disableOnInvalid":true,"input":true,"tableView":false}]}'
const json = '{"display":"form","settings":{"pdf":{"id":"1ec0f8ee-6685-5d98-a847-26f67b67d6f0","src":"https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"}},"components":[{"label":"Text Field","tableView":true,"key":"textField","type":"textfield","input":true},{"label":"Photo(s)","tableView":false,"storage":"base64","webcam":false,"fileTypes":[{"label":"","value":""}],"multiple":true,"key":"photoS","type":"file","input":true,"keyModified":true}]}';
export default function App() {
  //for online formio
  // var customHTML = "<html><head> <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'><link rel='stylesheet' href='https://cdn.form.io/formiojs/formio.full.min.css'><script src='https://cdn.form.io/formiojs/formio.full.min.js'></script><script type='text/javascript'>window.onload = function() {Formio.createForm(document.getElementById('formio'), " + json + ");};</script></head><body><div id='formio'></div></body></html>"
  //for offline formio
  // var customHTML = "<html><head><script src='formio.full.js'></script>" +
  //   "<script type='text/javascript'>window.onload = function() {alert(typeof Formio);Formio.createForm(document.getElementById('formio'), " + json + ");};</script>" +
  //   "</head> <body><div id='formio'></div></body></html > "

  //const jsCode = `window.onload = function() {Formio.createForm(document.getElementById('formio'), ${json})}`;
  const jsCode = `window.onload = function() {Formio.createForm(document.getElementById('formio'), ${json} ).then(function(form) {
              form.on('change', (component, value) => {
                 let jsonData = JSON.stringify(form.submission.data);
                 console.log("JSON",jsonData); 
                  window.ReactNativeWebView.postMessage(jsonData);
              }); })
              }`;

  const sourceUri = 'Web.bundle/4.html';
  //const source = require('./html/Web.bundle/4.html');
  // const source = await fetch(Expo.Asset.fromModule(require('./html/Web.bundle/4.html')).uri)
  //   .then(f => f.text())
  return (
    <View style={{ flex: 1 }}>
      {/* <WebView style={{ margin: 20 }}
            javaScriptCanOpenWindowsAutomatically={false}
            setBuiltInZoomControls={true} 
            originWhitelist={['*']}
            source={{ html: customHTML }}
            javaScriptEnabled={true}
            domStorageEnabled={true}  
        /> */}

      <Text>kjdshf</Text>
      <WebView style={{ margin: 20 }}
        javaScriptCanOpenWindowsAutomatically={false}
        setBuiltInZoomControls={true}
        originWhitelist={['*']}
        //source={{ uri: (Platform.OS == "android" ? "file:///android_asset/www/4.html" : "4.html") }}
        source={{ uri: "Web.bundle/4.html" }}
        //source={sourceUri}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onMessage={event => {
          Alert.alert('MESSAGE >>>>' + event.nativeEvent.data);
        }}
        javaScriptEnabledAndroid={true}
        injectedJavaScript={jsCode}
      />
      {

        // <WebView
        //   style={{width: 300}}
        //   source={{html: require('./assets/4.js')()}}
        //   originWhitelist={['*']}
        // />
        // <WebView
        //   style={{flex: 1}}
        //   originWhitelist={['*']}
        //   source={HTML_FILE}
        //   style={{marginTop: 20}}
        //   javaScriptEnabled={true}
        //   domStorageEnabled={true}
        // />
        // <WebView style={{ margin: 20 }}
        //   javaScriptCanOpenWindowsAutomatically={false}
        //   setBuiltInZoomControls={true} 
        //   originWhitelist={['*']}
        //   // source={{html: require('./assets/4.js')()}}
        //   // source={ {html: require('./assets/4.html')} }
        //   // source={HTML_FILE}
        //   // source={'./assets/4.html'}
        //   // source={{
        //   //   uri: uri,
        //   // }}
        //   // source={{ 
        //   //   html: htmlFile,
        //   //   baseUrl: ''
        //   // }}
        //   // source={{ uri: uri, baseUrl: "assets/"}}
        //   source={{ uri: (Platform.OS == "android" ? "file:///android_asset/www/4.html" : "4.html") }}
        //   javaScriptEnabled={true}
        //   domStorageEnabled={true}            
        // />
        //   <WebView
        //   source={{ uri: (Platform.OS == "android" ? "file:///android_asset/www/4.html" : "./4.html") }}
        //   style={{ marginTop: 20 }}
        //   onLoadProgress={e => console.log(e.nativeEvent.progress)}
        // />
      }
    </View>
  );
}; 