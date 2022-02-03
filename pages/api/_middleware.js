const { NextResponse } = require('next/server')
export async function middleware(req, res) {
  console.log('in api mw')
  const response = NextResponse.next()
  debugger
  await new Promise((resolve) => {
    setTimeout(resolve, 100)
  })
  return response
}
