export default function ({ store, redirect, route }) {
  // If the user is not authenticated
  if (!store.state.user.auth) {
    const redirectPath = encodeURIComponent(JSON.stringify({
      path: route.path,
      query: route.query
    }))
    return redirect({ path: '/user/sign-in', query: { redirect: redirectPath }})
  }
}
