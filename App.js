import { StyleSheet, Text, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import LikeImage from "./assets/images/like.png";

const post = {
  id: "p1",
  createdAt: "19 m",
  User: {
    id: "u1",
    image:
      "data:image/jpeg;base64,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",
    name: "Vadim Savin",
  },
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image:
    "data:image/jpeg;base64,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",

  numberOfLikes: 11,
  numberOfShares: 2,
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        {/* header */}
        <View style={styles.header}>
          <Image
            source={{ uri: post.User.image }}
            style={styles.profilePicture}
          />

          <View>
            <Text style={styles.name}>{post.User.name}</Text>
            <Text style={styles.subtitle}>{post.createdAt}</Text>
          </View>
          <Entypo
            name="dots-three-horizontal"
            size={18}
            color="gray"
            style={styles.icon}
          />
        </View>
        <Text style={styles.description}>{post.description}</Text>
        {post.image && (
          <Image
            source={{ uri: post.image }}
            style={styles.image}
            resizeMode="cover"
          />
        )}
        {/* body */}

        {/* footer */}
        <View style={styles.footer}>
          <View style={styles.footer}>
            {/* Stats row */}
            <View style={styles.statsRow}>
              <Image source={LikeImage} style={styles.likeIcon} />
              <Text style={styles.likedBy}>
                sundiata and {post.numberOfLikes} others
              </Text>
              <Text style={styles.shares}>{post.numberOfShares} shares</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    backgroundColor: "#fff",
    marginVertical: 5,
    marginTop: 15,
  },
  header: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  subtitle: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  description: {
    lineHeight: 20,
    padding: 10,
  },

  // footer

  footer: {
    paddingHorizontal: 10,
  },

  // Stats Row
  statsRow: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    borderColor: "lightgray",
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  likedBy: {
    color: "gray",
  },
  shares: {
    color: "gray",
    marginLeft: "auto",
  },
});
