<template>
    <div>
        <section>
            <nav class="navbar navbar-expand-xl navbar-light mt-3">
                <div class="container-fluid">
                    <router-link 
                        to="/"
                        tag = "a"
                        class="navbar-brand ms-3">
                         myFurniture
                    </router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex headerSearchForm ms-xl-auto ms-md-3">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                        <li class="nav-item d-flex align-items-center">
                            <router-link 
                                to="/loginpage"
                                tag = "a"
                                class="nav-link me-lg-4  ms-md-3">
                                <i class="fas fa-user me-sm-3"></i>
                                Sign in
                            </router-link>
                            <router-link 
                                to="/register"
                                tag = "a"
                                class="nav-link me-lg-4  ms-md-3">
                                <i class="fas fa-user me-sm-3"></i>
                                Register
                            </router-link>
                        </li>
                        <li class="nav-item d-flex align-items-center">
                            <a class="nav-link me-lg-4  ms-md-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fas fa-heart me-sm-3"></i>Saved for later</a>
                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 id="offcanvasRightLabel">Shopping Cart</h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div class="row">
                                    <div class="col-md-12 text-center">
                                        <h2>You don't have any favorite product</h2>
                                        <p>Let's find something nice for you</p>
                                        <button class="btn btn-dark p-3 text-white">Start Shopping</button>
                                    </div>
                                </div>
                                <div class="row mt-5">
                                    <div class="col-md-12">
                                        <ul>
                                            <li>Selam</li>
                                            <li>Selam</li>
                                            <li>Selam</li>
                                            <li>Selam</li>
                                            <li>Selam</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </li>
                        <li class="nav-item d-flex align-items-center">
                            <a class="nav-link me-lg-4  ms-md-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" aria-controls="offcanvasRight2"><i class="fas fa-shopping-cart me-sm-3"></i>Shopping cart</a>
                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight2" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 id="offcanvasRightLabel">Shopping Cart</h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div class="row">
                                    <div class="col-md-12 text-center">
                                        <h2>Your cart is empty</h2>
                                        <p>Let's find something nice for you</p>
                                        <button class="btn btn-dark p-3 text-white">Start Shopping</button>
                                    </div>
                                </div>
                                <div class="row mt-5">
                                    <div class="col-md-12">
                                        <ul>
                                            <li>Selam</li>
                                            <li>Selam</li>
                                            <li>Selam</li>
                                            <li>Selam</li>
                                            <li>Selam</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <!-- Sol taraftan açılan menü -->
            <div class="row mt-3">
                <div class="col-md-2">
                    <a class="btn btn-primary ms-4 rounded-pill p-2" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><i class="fas fa-bars me-3"></i>All Categories</a>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Furnitures</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="list-unstlyed">
                                <li class="mb-4 text-center"><a class="text-decoration-none text-dark fs-3" href="#">Decor</a></li>
                                <li class="mb-4 text-center"><a class="text-decoration-none text-dark fs-3" href="#">Storage</a></li>
                                <li class="mb-4 text-center"><a class="text-decoration-none text-dark fs-3" href="#">Lighting</a></li>
                                <li class="mb-4 text-center"><a class="text-decoration-none text-dark fs-3" href="#">Office</a></li>
                                <li class="mb-4 text-center"><a class="text-decoration-none text-dark fs-3" href="#">Bedroom</a></li>
                                <li class="mb-4 text-center"><a class="text-decoration-none text-dark fs-3" href="#">Bathroom</a></li>
                                <li class="mb-4 text-center"><a class="text-decoration-none text-dark fs-3" href="#">Kitchen</a></li>
                                <li class="mb-4 text-center"><a class="text-decoration-none text-dark fs-3" href="#">Outdoor</a></li>
                                <li class="mb-4 text-center"><a class="text-decoration-none text-dark fs-3" href="#">Game room</a></li>
                                <li class="mb-4 text-center"><a class="text-decoration-none text-dark fs-3" href="#">Seasonal</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-10">
                    <ul class="nav">
                        <li class="nav-item">
                            <router-link 
                                to="/furniture"
                                tag = "a"
                                class="nav-link text-decoration-none text-dark">
                                Furniture
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link 
                                to="/decor"
                                tag = "a"
                                class="nav-link text-decoration-none text-dark">
                                Decor
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link 
                                to="/storage"
                                tag = "a"
                                class="nav-link text-decoration-none text-dark">
                                Storage
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link 
                                to="/lighting"
                                tag = "a"
                                class="nav-link text-decoration-none text-dark">
                                Lighting
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link 
                                to="/office"
                                tag = "a"
                                class="nav-link text-decoration-none text-dark">
                                Office
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link 
                                to="/bedroom"
                                tag = "a"
                                class="nav-link text-decoration-none text-dark">
                                Bedroom
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link 
                                to="/bathroom"
                                tag = "a"
                                class="nav-link text-decoration-none text-dark">
                                Bathroom
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link 
                                to="/kitchen"
                                tag = "a"
                                class="nav-link text-decoration-none text-dark">
                                Kitchen
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link 
                                to="/outdoor"
                                tag = "a"
                                class="nav-link text-decoration-none text-dark">
                                Outdoor
                            </router-link>
                        </li>
                        <li class="nav-item ms-xl-auto ms-md-0">
                            <a class="nav-link text-decoration-none text-dark" aria-current="page" href="#">Free shipping & returns</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .headerSearchForm{
        width: 50%;
    }
    .list-unstlyed{
        list-style: none!important;
    }
</style>