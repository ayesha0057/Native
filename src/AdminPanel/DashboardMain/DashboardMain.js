import React from 'react';
import {ScrollView, View, Text} from 'react-native';
const DashboardMain = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#f7f6f6'}}>
      <ScrollView>
        <View
          style={{
            height: 185,
            width: 350,
            backgroundColor: '#0FBCF9',
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 30,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 75,
              fontWeight: '700',
              paddingLeft: 10,
            }}>
            {' '}
            56
          </Text>
          <Text
            style={{
              color: '#fff',
              fontWeight: '700',
              fontSize: 18,
              paddingLeft: 25,
              marginTop: -15,
              paddingBottom: 10,
            }}>
            {' '}
            Incomes this Month
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              paddingVertical: 10,
              marginLeft: 10,
            }}>
            <Text
              style={{
                height: 5,
                width: 150,
                backgroundColor: '#fff',
                borderRadius: 10,
              }}>
              {' '}
            </Text>
            <Text
              style={{
                height: 5,
                width: 150,
                backgroundColor: '#fff',
                opacity: 0.5,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
              }}>
              {' '}
            </Text>
          </View>
          <Text style={{color: '#F6F5F5', fontSize: 15, paddingLeft: 25}}>
            {' '}
            132 Activities this Month
          </Text>
        </View>

        <View
          style={{
            height: 185,
            width: 350,
            backgroundColor: '#1c36b9',
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 30,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 75,
              fontWeight: '700',
              paddingLeft: 10,
            }}>
            {' '}
            237
          </Text>
          <Text
            style={{
              color: '#fff',
              fontWeight: '700',
              fontSize: 18,
              paddingLeft: 25,
              marginTop: -15,
              paddingBottom: 10,
            }}>
            {' '}
            New Orders this Month
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              paddingVertical: 10,
              marginLeft: 10,
            }}>
            <Text
              style={{
                height: 5,
                width: 150,
                backgroundColor: '#fff',
                borderRadius: 10,
              }}>
              {' '}
            </Text>
            <Text
              style={{
                height: 5,
                width: 150,
                backgroundColor: '#fff',
                opacity: 0.5,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
              }}>
              {' '}
            </Text>
          </View>
          <Text style={{color: '#F6F5F5', fontSize: 15, paddingLeft: 25}}>
            {' '}
            132 Activities this Month
          </Text>
        </View>

        <View
          style={{
            height: 185,
            width: 350,
            backgroundColor: '#cc1516',
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 30,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 75,
              fontWeight: '700',
              paddingLeft: 30,
            }}>
            121
          </Text>
          <Text
            style={{
              color: '#fff',
              fontWeight: '700',
              fontSize: 18,
              paddingLeft: 25,
              marginTop: -15,
              paddingBottom: 10,
            }}>
            {' '}
            Expenses this Month
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              paddingVertical: 10,
              marginLeft: 10,
            }}>
            <Text
              style={{
                height: 5,
                width: 150,
                backgroundColor: '#fff',
                borderRadius: 10,
              }}>
              {' '}
            </Text>
            <Text
              style={{
                height: 5,
                width: 150,
                backgroundColor: '#fff',
                opacity: 0.5,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
              }}>
              {' '}
            </Text>
          </View>
          <Text style={{color: '#F6F5F5', fontSize: 15, paddingLeft: 25}}>
            {' '}
            132 Activities this Month
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardMain;
