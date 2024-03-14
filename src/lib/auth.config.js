export const authConfig = {
    pages: {
        signIn: "/login",
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }) {
            
            if (user) {
                token.id = user.id
                token.username = user.username
                token.isAdmin = user.isAdmin

            }

            return token
        },
        async  session({session,token}){
            if(token){
                session.user.id=token.id
                session.user.username = token.username
                session.user.isAdmin=token.isAdmin
            }
             return session
        },
        authorized({ auth, request }) {
            const user=auth?.user;
            const isOnAdminPanel=request.nextUrl?.pathname.startsWith("/admin")
            const isOnBlogpage=request.nextUrl?.pathname.startsWith("/browse")
            const isOnLoginPage=request.nextUrl?.pathname.startsWith("/login")
            const isOnGivePage=request.nextUrl?.pathname.startsWith("/give")
            const isOnDashboardPage=request.nextUrl?.pathname.startsWith("/dashboard")

            if(isOnAdminPanel && !user?.isAdmin){
                return false
            }
            if(isOnBlogpage && !user){
                return false
            }
            if(isOnGivePage && !user){
                return false
            }
            if(isOnDashboardPage && !user){
                return false 
            }
            if(isOnLoginPage && user?.isAdmin){

                return Response.redirect(new URL('/admin',request.nextUrl))
            }
           
            if(isOnLoginPage && user){
                return Response.redirect(new URL('/dashboard',request.nextUrl))

            }
            


            return true;
        }
    }
}   