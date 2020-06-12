import { Dimensions, StyleSheet } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
import { getStatusBarHeight } from 'react-native-status-bar-height';
const heightSB = getStatusBarHeight();
import { GRAY, GREEN, RED, WHITE, BLUE } from '../constants';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: GRAY
    },
    sb: {
        width: WIDTH,
        height: heightSB,
        backgroundColor: GRAY
    },
    add: {
        width: WIDTH,
        height: 60,
        paddingLeft: 5,
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
        backgroundColor: WHITE,
        paddingLeft: 5
    },

    item: {
        width: WIDTH,
        height: 40,
        marginBottom: 8,
        paddingLeft: 5,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
    },
    itemTxt: {
        width: WIDTH - 50,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: GRAY,
        textAlign:"center",
        textAlignVertical:"center",
        fontSize: 18,
        fontWeight: "bold",
        backgroundColor: WHITE
    },
});

export default styles;