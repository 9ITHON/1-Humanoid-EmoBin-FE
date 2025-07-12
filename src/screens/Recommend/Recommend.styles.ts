import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const POSTER_WIDTH = width * 0.5;  
export const PLAY_WIDTH   = width * 0.75;
export const POSTER_SPACING = 16;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffbf1",
  },
  scrollContent: { paddingBottom: 40 },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffbf1",
  },

  header: {
    marginTop: 50,
    width: "100%",             
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 0,
  },
  logo: {
    width: 80,
    height: 24,
    resizeMode: "contain",
    marginLeft: 20,              
  },
  profile: {
    width: 28,
    height: 28,
    resizeMode: "contain",
    marginRight: 20,             
  },

  banner: {
    width: "100%",          
    backgroundColor: "#F7D24E",
    paddingVertical: 12,    
    paddingHorizontal: 20, 
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  bannerImg: {
    width: "55%",          
    height: undefined,
    aspectRatio: 335 / 88,  
    resizeMode: "contain",
    marginBottom:10
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#444",
    marginLeft: 20,
    marginBottom: 8,
  },

  poster: {
    height: POSTER_WIDTH * 1.55,
    backgroundColor: "#eee",
    borderRadius: 8,
  },

  playThumb: {
    height: PLAY_WIDTH * 0.56,
    borderRadius: 6,
    backgroundColor: "#eee",
  },
  playCaption: {
    width: PLAY_WIDTH,
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
});
