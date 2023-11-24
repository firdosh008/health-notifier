const login = () => {
    return (
        <div class="flex items-center justify-center min-h-screen bg-neutral-100">
      <div
        class="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl hover:shadow-xl shadow-neutral-700 hover:shadow-neutral-900 rounded-2xl md:flex-row md:space-y-0"
      >
        {/* <!-- left side --> */}
        <div class="flex flex-col justify-center p-8 md:p-14">
          <div class="mb-3 text-2xl font-bol flex flex-row gap-2 text-neutral-500 font-semibold mx-auto">
            Sign In to
            <p className="font-semibold text-green-500 text-2xl">zeroFit</p>
          </div>
          <hr className="w-full"/>
          <div class="py-4">
            <span class="mb-2 text-md">Email</span>
            <input
              type="text"
              class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
            />
          </div>
          <div class="py-4">
            <span class="mb-2 text-md">Password</span>
            <input
              type="password"
              name="pass"
              id="pass"
              class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div class="flex justify-between w-full py-4">
            <div class="mr-24">
              <input type="checkbox" name="ch" id="ch" class="mr-2" />
              <span class="text-md">Remember for 30 days</span>
            </div>
            <span class="font-bold text-md">Forgot password</span>
          </div>
          <button
            class="w-full bg-green-500 text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black border hover:border-gray-300"
          >
            Sign in
          </button>
          <div className="flex flex-row items-center gap-2 py-2">
            <hr className="w-full"/> <p>OR</p> <hr className="w-full"/>
          </div>
          <button
            class="w-full border flex flex-row items-center border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-green-500 hover:text-white"
          >
            <div className="flex flex-row items-center m-auto group:hover">
                <p className="pr-2">Sign in with</p> 
                <p className="font-semibol">Google</p>
            </div>
          </button>
          <div class="text-center text-gray-400">
            Dont'have an account?
            <span class="font-semibold text-green-500"> Sign Up</span>
          </div>
        </div>
        {/* <!-- right side --> */}
        <div class="relative">
          <img
            src="sign in.jpg"
            alt="img"
            class="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          {/* <!-- text on image  --> */}
          <div
            class="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
            <span class="text-white text-xl"
              >We've been uesing Untitle to kick"<br />start every new project
              and can't <br />imagine working without it."
            </span>
          </div>
        </div>
      </div>
    </div>
    );
}

export default login;