import NextAuth from "next-auth"
import GitHubProviders from "next-auth/providers/github"

export default NextAuth({
    providers: [
        GitHubProviders({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            authorization: {
                params: {
                    scope: 'read:user'
                }
            }
        }),
    ],
})