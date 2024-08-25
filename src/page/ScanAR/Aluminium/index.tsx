import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ViroARScene, ViroARSceneNavigator, ViroARTrackingTargets, ViroAmbientLight, Viro3DObject, ViroARImageMarker, ViroMaterials, ViroText, ViroImage } from '@reactvision/react-viro';
import Font from '../../../assets/fonts/font';

const MyScene = ({ onObjectLoaded }) => {

  const anchorFound = () => {
    console.log("Anchor/Image detected");
  };

  const on3DObjectLoadStart = () => {
    console.log('3D object loading started');
  };

  const on3DObjectLoadEnd = () => {
    console.log('3D object loaded successfully');
    onObjectLoaded();
  };

  const on3DObjectLoadError = (event) => {
    console.error('3D object failed to load:', event.nativeEvent);
  };

  return (
    <ViroARScene onTrackingUpdated={anchorFound}>
      <ViroAmbientLight color={'#aaaaaa'} />
      <Viro3DObject
            source={require('../model/aluminum/aluminum.obj')}
            resources={[
              require('../model/aluminum/texture.mtl'),
              require('../model/aluminum/baseColor.png'),
              require('../model/aluminum/normal.png'),
            ]}
            scale={[0.05, 0.05, 0.05]}
            rotation={[0, 200, 0]}
            position={[-0.15, 0.2, -0.55]} // Adjust the position if necessary
            type="OBJ"
            onLoadStart={on3DObjectLoadStart}
            onLoadEnd={on3DObjectLoadEnd}
            onError={on3DObjectLoadError}
      />

      <ViroImage
          scale={[0.5, 0.25, 0.5]}
          position={[0, -0.2, -0.55]}
          rotation={[0, 0, 0]}
          // placeholderSource={require("./res/local_spinner.jpg")}
          source={require('../model/aluminum/alumunium-teks.png')}
      />
    </ViroARScene>
  );
};

const ScanAR = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleObjectLoaded = () => {
    setIsLoading(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {isLoading && <Text style={{ color: "black" }}>Loading 3D Object...</Text>}
      <ViroARSceneNavigator 
        initialScene={{ scene: () => <MyScene onObjectLoaded={handleObjectLoaded} /> }} 
        style={{ flex: 1 }} 
      />
    </View>
  );
};

export default ScanAR

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle:{
    fontFamily: Font.font.regular,
    color: "white",
    fontSize: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
  }
});
