import { View, Text } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import { Calendar, CalendarList } from "react-native-calendars";
import moment from "moment";
import { deviceHeight } from '../src/Screens/Utils/DImensions';
import { colors } from './colors';

export default function CalanderComponent({fromDate, toDate, onDayClick }) {
    // const [fromDate, setFromDate] = React.useState('');
    // const [toDate, setToDate] = React.useState('');
    // const [selectedMonth, setSelectedMonth] = useState();
    const [selectedMonth, setSelectedMonth] = React.useState(moment().month() + 1);
    const [selectedYear, setSelectedYear] = React.useState(moment().year());
    const weeks = ['M', 'T', 'W', 'Th', 'F', 'S', 'S']

    const onDayPress = useCallback((day) => {
        console.log("day", day);
        if (fromDate === "" && toDate === "") {
            onDayClick(day.dateString, null); 
            setFromDate(day.dateString);
        }
        else if (fromDate !== "" && toDate === "" && day.dateString > fromDate) {
            setToDate(day.dateString)
            onDayClick(fromDate, day.dateString);
        }
        else if (fromDate !== "" && toDate !== "") {
            setToDate("");
            setFromDate("")
        }
        // else if (day.dateString < fromDate) {
        //   setFromDate(day.dateString)
        // }
        // else {
        //   setFromDate(day.dateString)
        // }

    }, [fromDate, toDate]);


    const marked = useMemo(() => {
        if (!fromDate) return {};
        let start = new Date(fromDate).getTime();
        let end = new Date(toDate || fromDate).getTime();
        let marked = {};

        for (let cur = start; cur <= end; cur += 60 * 60 * 24000) {
            let curStr = new Date(cur).toISOString().substr(0, 10);
            marked[curStr] = {
                selected: true,
                color: '#6AD29E14',
                textColor: colors.black,
                startingDay: cur == start,
                endingDay: cur == end,
            };
        }
        return marked;
    }, [fromDate, toDate]);

    const handlePressDate = (date) => {
        onDayPress(date);
        // onDayClick(date.dateString);
    };

    return (
        <View style={{ backgroundColor: colors.white, width: '100%' }}>
            <CalendarList
                calendarHeight={deviceHeight * 0.38}
                theme={{
                    backgroundColor: '#ffffff',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: '#b6c1cd',
                    textSectionTitleDisabledColor: '#d9e1e8',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    arrowColor: 'orange',
                    disabledArrowColor: '#d9e1e8',
                    monthTextColor: '#000',
                    indicatorColor: 'blue',
                    textDayFontFamily: 'monospace',
                    textMonthFontFamily: 'monospace',
                    textDayHeaderFontFamily: 'monospace',
                    textDayFontWeight: '300',
                    textMonthFontWeight: '700',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16
                }}
                // key={calendarKey}
                minDate={'24-01-01'}
                current={`${selectedYear}-${selectedMonth}-01`}
                showScrollIndicator={false}
                // containerStyle={{ backgroundColor: colors.greenTheme, justifyContent: 'center', alignSelf: 'center', width: '100%', }}
                // scrollContentStyle={{ backgroundColor: '#fff', paddingTop: 10, paddingBottom: 10, alignItems: 'center', width: '100%' }}
                cancel={() => setToolbarState({ visible: false })}
                confirm={data => {
                    setState({
                        selectedDate1: data[0],
                        selectedDate2: data[1],
                        visible: false,
                    });
                }}
                onPressDate={(date) => handlePressDate(date)}
                // onDayPress={onDayPress}
                markedDates={marked}
                markingType='period'
                showToolBar={false}
                selectedTextColor={"#FDBD00"}
                monthDisplayMode={'en-long'}
                selectedDateMarkColor={'#6AD29E14'}
                selectedDateMarkRangeColor={'#6AD29E14'}
                firstDayOnWeeks={1}
                weeks={weeks}
                weeksStyle={{ marginTop: 15 }}
                weeksTextStyle={{ color: '#000', fontSize: 12, fontWeight: '700' }}
                headerTitleType={3}
                listItemStyle={{ headerTitle: { fontSize: 18, color: colors.greenTheme, textAlign: 'center' } }}
                cancelText={'Cancel Selection'}
                confirmText={'Confirm Selection'}
                // onPressDate={() => { console.log('clicked'); handlePressDate }}
                hideArrow={true}

            />
        </View>
    )
}