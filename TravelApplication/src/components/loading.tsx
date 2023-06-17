import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Modal, View, ActivityIndicator } from "react-native";
import { useAppSelector } from '~/redux/store';

const DefLoading = (props:any) => {
  const generalState = useAppSelector((state) => state.generalSlice);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={generalState.loading}
      onRequestClose={() => {
        //Alert.alert("Modal has been closed.");
        //setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
          <ActivityIndicator
            visible={generalState.loading}
          />
      </View>
    </Modal>

  );
};

DefLoading.propTypes = {
  loadingDialogVisible: PropTypes.bool.isRequired
};

DefLoading.defaultProps = {
  loadingDialogVisible: false
};

export default DefLoading;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  logo: {
    width: 75,
    height: 75
  }
});
