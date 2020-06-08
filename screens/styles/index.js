import { Dimensions, StyleSheet } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
import { getStatusBarHeight } from 'react-native-status-bar-height';
const heightSB = getStatusBarHeight();
import { GRAY, GREEN, RED, WHITE, BLUE } from '../constants';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: heightSB,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: GRAY
    },
    add: {
        width: WIDTH,
        height: 60,
        paddingLeft: 5,
        marginTop: 5,
        marginBottom: 7,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: GRAY
    },
    addTxt: {
        width: WIDTH - 50,
        height: 40,
        borderRadius: 5,
        backgroundColor: WHITE
    },

    item: {
        width: WIDTH,
        height: 40,
        paddingLeft: 5,
        marginBottom: 7,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: WHITE
    },
    itemTxt: {
        width: WIDTH - 50,
        height: 40,
        textAlign:"center",
        textAlignVertical:"center",
        fontSize: 18,
        fontWeight: "bold",
    },
    itemTxtBuy: {
        width: WIDTH - 50,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        textAlign:"center",
        textAlignVertical:"center",
        fontSize: 14,
    },
    itemTitle: {
        width: WIDTH - 50,
        height: 40,
        justifyContent:"flex-start",
        alignItems:"center"
    },
});

export default styles;