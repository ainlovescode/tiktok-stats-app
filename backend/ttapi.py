from TikTokApi import TikTokApi


class TTApi:
    def __init__(self):
        self.tiktokApi = TikTokApi.get_instance()

        self.num_of_posts = 20
        self.user = None
        self.posts = None

    def getNumOfPosts(self):
        return self.num_of_posts

    def setNumOfPosts(self, num_of_posts):
        self.num_of_posts = num_of_posts

    def setUser(self, username):
        self.user = self.tiktokApi.get_user(username)
        self.setPosts()

    def getUsername(self):
        return self.user["uniqueId"]

    def getFollowers(self):
        return self.user["userInfo"]["stats"]["followerCount"]

    def getPosts(self):
        return self.posts

    def setPosts(self):
        username = self.getUsername()
        num_of_posts = self.getNumOfPosts()

        self.posts = self.tiktokApi.by_username(username, num_of_posts)

    def getAnalytics(self):
        response_analytics = {}

        posts = self.getPosts()

        num_of_posts = self.getNumOfPosts()
        num_of_followers = self.getFollowers()

        post_metadata_all = []

        total_eng = 0
        total_views = 0

        for post_idx in range(num_of_posts):
            post = posts[post_idx]

            post_eng, post_views, desc_trunc = self.getPostEngagementViewsDesc(post)

            total_eng += post_eng
            total_views += post_views

            post_metadata = self.extract_post_eng_rate_caption(desc_trunc, post_eng, post_views)

            post_metadata_all.append(post_metadata)

        profile_eng_rate = self.calculateProfileEngRate(total_eng, num_of_followers)
        average_views = total_views / num_of_posts

        response_analytics["profile_eng_rate"] = profile_eng_rate
        response_analytics["post_metadata_all"] = post_metadata_all
        response_analytics["average_views"] = average_views

        return response_analytics

    def extract_post_eng_rate_caption(self, desc_trunc, post_eng, post_views):
        post_metadata = {}
        post_eng_rate = round((100 * post_eng / post_views), 2)
        post_metadata["caption"] = desc_trunc
        post_metadata["post_eng_rate"] = post_eng_rate
        return post_metadata

    def calculateProfileEngRate(self, total_engagement, num_of_follows):
        profile_eng_rate = (100 * total_engagement) / (self.num_of_posts * num_of_follows)
        return round(profile_eng_rate, 2)

    def getPostEngagementViewsDesc(self, video_data):
        likes = video_data["stats"]["diggCount"]
        comments = video_data["stats"]["commentCount"]
        shares = video_data["stats"]["shareCount"]
        views = video_data["stats"]["playCount"]
        desc_trunc = video_data["desc"][:50] + "..."

        post_eng = likes + comments + shares

        return post_eng, views, desc_trunc
