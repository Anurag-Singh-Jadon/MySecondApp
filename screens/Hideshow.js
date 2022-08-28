import React from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DoctorCard from './DoctorCard';
import { List } from 'react-native-paper';

const Department = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    // const Data1 = [
    //     {
    //         t1: `Dr Elina George`, text2: `Cardiac surgeon at Apollo Hospital`, text3: `12 Years`, charges: `1499`
    //     },
    //     {
    //         t1: `Dr Vipul Mohan`, text2: `General Practitioner`, text3: `13 Years`, charges: `2000`
    //     },
    //     {
    //         t1: `Dr Sameer Gupta`, text2: `Heart Specialist Noida`, text3: `10 Years`, charges: `1999`
    //     },
    //     {
    //         t1: `Dr Elina George`, text2: `Cardiac surgeon at Apollo Hospital`, text3: `12 Years`, charges: `1499`
    //     },
    //     {
    //         t1: `Dr Vipul Mohan`, text2: `General Practitioner`, text3: `13 Years`, charges: `2000`
    //     },
    //     {
    //         t1: `Dr Sameer Gupta`, text2: `Heart Specialist Noida`, text3: `10 Years`, charges: `1999`
    //     },

    // ]
    const asdfg = "rohan"
    // let items = Data1.map((item, index) => {
    //     return (<List.Item title={items.t1} key={index} />);
    // });

    return (

        <View style={styles.container}>
            {/* <FlatList
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                data={Data1}
                renderItem={({ item }) =>
                    <DoctorCard
                        t1={item.t1}
                        text2={item.text2}
                        text3={item.text3}
                        charges={item.charges} />
                }
            /> */}
            <List.Section >
                <List.Accordion
                    title="Oncology Department"
                >
                    <ScrollView>
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                    </ScrollView>
                </List.Accordion>

                <List.Accordion
                    title="Cardiology Department"
                    left={props => <List.Icon {...props} icon="folder" />}
                    onPress={handlePress}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
                <List.Accordion
                    title="Neurology Department"
                    left={props => <List.Icon {...props} icon="folder" />}
                    onPress={handlePress}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
                <List.Accordion
                    title="Radiology Department"
                    left={props => <List.Icon {...props} icon="folder" />}
                    onPress={handlePress}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
                <List.Accordion
                    title="Dietary Department"
                    left={props => <List.Icon {...props} icon="folder" />}
                    onPress={handlePress}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
                <List.Accordion
                    title="Oncology Department"
                    left={props => <List.Icon {...props} icon="folder" />}
                    onPress={handlePress}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
            </List.Section>



        </View>


    );
};



export default Department;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: wp('100%'),
        height: hp('66%')

    },

});