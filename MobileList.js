//API Request with React Native
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MobileList = () => {
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/SanviBhelkar/Unit-II_CA_Fake-rest-API/gadegets')
      .then(response => response.json())
      .then(data => setMobiles(data));
  }, []);

  return (
    <View>
      {mobiles.map(mobile => (
        <Text key={mobile.id}>{mobile.name} - {mobile.brand} - ${mobile.price}</Text>
      ))}
    </View>
  );
}

export default MobileList;

// //Life Cycle Methods in React Native
// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';

// const MobileList = () => {
//   const [mobiles, setMobiles] = useState([]);

//   useEffect(() => {
//     // ComponentDidMount
//     fetchMobiles();

//     // ComponentWillUnmount
//     return () => {
//       // Cleanup
//     };
//   }, []);

//   const fetchMobiles = () => {
//     fetch('https://my-json-server.typicode.com/<username>/<repository>/gadgets')
//       .then(response => response.json())
//       .then(data => setMobiles(data));
//   };

//   return (
//     <View>
//       {mobiles.map(mobile => (
//         <Text key={mobile.id}>{mobile.name} - {mobile.brand} - ${mobile.price}</Text>
//       ))}
//     </View>
//   );
// }

// export default MobileList;

// // Making Request With Axios
// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import axios from 'axios';

// const MobileList = () => {
//   const [mobiles, setMobiles] = useState([]);

//   useEffect(() => {
//     axios.get('https://my-json-server.typicode.com/<username>/<repository>/gadgets')
//       .then(response => setMobiles(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <View>
//       {mobiles.map(mobile => (
//         <Text key={mobile.id}>{mobile.name} - {mobile.brand} - ${mobile.price}</Text>
//       ))}
//     </View>
//   );
// }

// export default MobileList;

// //Using of State in React Native
// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, ActivityIndicator } from 'react-native';
// import axios from 'axios';

// const MobileList = () => {
//   const [mobiles, setMobiles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch mobiles from the API
//     fetchMobiles();
//   }, []);

//   const fetchMobiles = () => {
//     // Fetch mobiles data from the API
//     axios.get('https://my-json-server.typicode.com/<username>/<repository>/gadgets')
//       .then(response => {
//         setMobiles(response.data); // Update mobiles state with fetched data
//         setLoading(false); // Set loading state to false once data is fetched
//       })
//       .catch(error => {
//         console.error(error);
//         setLoading(false); // Set loading state to false in case of error
//       });
//   };

//   const renderMobileItem = ({ item }) => (
//     <View style={{ padding: 10 }}>
//       <Text>Name: {item.name}</Text>
//       <Text>Brand: {item.brand}</Text>
//       <Text>Price: ${item.price}</Text>
//     </View>
//   );

//   return (
//     <View style={{ flex: 1, padding: 10 }}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" /> // Display loading indicator while fetching data
//       ) : (
//         <FlatList
//           data={mobiles}
//           renderItem={renderMobileItem}
//           keyExtractor={(item) => item.id.toString()}
//         />
//       )}
//     </View>
//   );
// };

// export default MobileList;

// // List Component in React Native 
// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, ActivityIndicator } from 'react-native';
// import axios from 'axios';

// const MobileList = () => {
//   const [mobiles, setMobiles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch mobiles from the API
//     fetchMobiles();
//   }, []);

//   const fetchMobiles = () => {
//     // Fetch mobiles data from the API
//     axios.get('https://my-json-server.typicode.com/<username>/<repository>/gadgets')
//       .then(response => {
//         setMobiles(response.data); // Update mobiles state with fetched data
//         setLoading(false); // Set loading state to false once data is fetched
//       })
//       .catch(error => {
//         console.error(error);
//         setLoading(false); // Set loading state to false in case of error
//       });
//   };

//   const renderMobileItem = ({ item }) => (
//     <View style={{ padding: 10 }}>
//       <Text>Name: {item.name}</Text>
//       <Text>Brand: {item.brand}</Text>
//       <Text>Price: ${item.price}</Text>
//     </View>
//   );

//   return (
//     <View style={{ flex: 1, padding: 10 }}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" /> // Display loading indicator while fetching data
//       ) : (
//         <FlatList
//           data={mobiles}
//           renderItem={renderMobileItem}
//           keyExtractor={(item) => item.id.toString()}
//         />
//       )}
//     </View>
//   );
// };

// export default MobileList;
