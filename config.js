// ============================================================
// SKYFALL ROLEPLAY — STORE CONFIG
// ============================================================
// This is the ONLY file you need to edit to manage listings.
//
// To HIDE a business:   set enabled: false
// To SHOW a business:   set enabled: true
// To ADD a business:    copy any entry, change id + details
// To ADD an image:      set images: ["assets/images/businesses/your-file.jpg"]
// To update Tebex link: change tebexLink to your package URL
// ============================================================

const STORE_CONFIG = {

  businesses: [

    // ══════════════════════════════════════════════════════
    // MECHANICS
    // ══════════════════════════════════════════════════════
    {
      category: "Mechanics",
      notice: "If you want to bring in your own MLO, please open a ticket with staff before buying anything from Tebex related to businesses. This is so staff can give you the go-ahead.",
      items: [
        {
          id: "lscustoms",
          enabled: true,
          name: "LS Customs",
          description: "The city's go-to vehicle modification shop. Full upgrade menus, plate changes, and livery installations all under one roof.",
          location: "Los Santos",
          type: "Automotive / Services",
          tebexLink: "https://your-store.tebex.io/package/lscustoms",
          images: [
            "assets/images/businesses/lscustoms-outside.png",
            "assets/images/businesses/lscustoms-inside.png",
            "assets/images/businesses/lscustoms-inside2.png",
          ],
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
            { icon: "🔧", text: "Full Tuning Suite — access to all vehicle upgrade menus" },
          ]
        },
        {
          id: "pent-garage",
          enabled: true,
          name: "Pent Garage",
          description: "An upscale private garage offering premium vehicle storage, servicing, and performance tuning for serious car enthusiasts.",
          location: "Los Santos",
          type: "Automotive / Garage",
          tebexLink: "https://your-store.tebex.io/package/pent-garage",
          images: [
            "assets/images/businesses/pentgarage-outside.png",
            "assets/images/businesses/pentgarage-outside2.png",
            "assets/images/businesses/pentgarage-inside.png",
            "assets/images/businesses/pentgarage-inside2.png",
          ],
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
            { icon: "🚗", text: "Private Vehicle Storage — secure multi-slot garage access" },
          ]
        },
      ]
    },

    // ══════════════════════════════════════════════════════
    // DISPENSARIES
    // ══════════════════════════════════════════════════════
    {
      category: "Dispensaries",
      notice: "If you want to bring in your own MLO, please open a ticket with staff before buying anything from Tebex related to businesses. This is so staff can give you the go-ahead.",
      items: [
        {
          id: "ferdinand",
          enabled: true,
          name: "Ferdinand's",
          description: "The city's premier weed dispensary. A fully licensed operation with a steady clientele and high demand. Staff management and society account included.",
          location: "Los Santos",
          type: "Dispensary / Weed Shop",
          tebexLink: "https://your-store.tebex.io/package/ferdinand",
          images: [
            "assets/images/businesses/ferd-outside.png",
            "assets/images/businesses/ferd-inside.png",
          ],
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
            { icon: "🌿", text: "Product Production — grow and sell weed to city residents" },
          ]
        },
      ]
    },

    // ══════════════════════════════════════════════════════
    // RESTAURANTS
    // ══════════════════════════════════════════════════════
    {
      category: "Restaurants",
      notice: "If you want to bring in your own MLO, please open a ticket with staff before buying anything from Tebex related to businesses. This is so staff can give you the go-ahead.",
      items: [
        {
          id: "catcafe",
          enabled: true,
          name: "Cat Cafe",
          description: "A cozy and unique cafe experience with a loyal city following. Great atmosphere and consistent foot traffic.",
          location: "Los Santos",
          type: "Food & Beverage",
          tebexLink: "https://your-store.tebex.io/package/catcafe",
          images: [
            "assets/images/businesses/catcafe-outside.png",
            "assets/images/businesses/catcafe-outside2.png",
            "assets/images/businesses/catcafe-inside.png",
            "assets/images/businesses/catcafe-inside2.png",
          ],
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
            { icon: "☕", text: "Food & Drink Production — craft and sell to city residents" },
          ]
        },
        {
          id: "burgershot",
          enabled: false,
          name: "Burger Shot",
          description: "One of the most iconic fast food chains in the city. High foot traffic location with full staff management.",
          location: "Little Seoul",
          type: "Food & Beverage",
          tebexLink: "https://your-store.tebex.io/package/burgershot",
          images: [
            "assets/images/businesses/burgershot-outside.png",
            "assets/images/businesses/burgershot-inside.png",
            "assets/images/businesses/burgershot-inside2.png",
          ],
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
            { icon: "🍔", text: "Food Production — craft and sell food to city residents" },
          ]
        },
        {
          id: "pizzathis",
          enabled: false,
          name: "Pizza This",
          description: "A city staple for quick, reliable pizza. Known for its busy lunch rush and steady evening crowd. High foot traffic guaranteed.",
          location: "Los Santos",
          type: "Food & Beverage",
          tebexLink: "https://your-store.tebex.io/package/pizzathis",
          images: [
            "assets/images/businesses/pizzathis-front.png",
            "assets/images/businesses/pizzathis-side.png",
            "assets/images/businesses/pizzathis-inside.png",
            "assets/images/businesses/pizzathis-inside2.png",
          ],
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
            { icon: "🍕", text: "Food Production — craft and sell food to city residents" },
          ]
        },
        {
          id: "hornys",
          enabled: true,
          name: "Horny's",
          description: "A popular diner-style restaurant with a distinctive brand and a strong local following in the city.",
          location: "TBD",
          type: "Food & Beverage",
          tebexLink: "https://your-store.tebex.io/package/hornys",
          images: [
            "assets/images/businesses/hornys-outside.png",
            "assets/images/businesses/hornys-inside.png",
            "assets/images/businesses/hornys-kitchen.png",
          ],
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
          ]
        },
        {
          id: "koi",
          enabled: true,
          name: "Koi",
          description: "An upscale dining establishment offering an exclusive experience. Premium clientele and prestigious city reputation.",
          location: "TBD",
          type: "Food & Beverage / Fine Dining",
          tebexLink: "https://your-store.tebex.io/package/koi",
          images: [],
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
          ]
        },
        {
          id: "pearls",
          enabled: true,
          name: "Pearls",
          description: "A sophisticated fine-dining venue with stunning views and an exclusive atmosphere for the city's elite.",
          location: "TBD",
          type: "Food & Beverage / Fine Dining",
          tebexLink: "https://your-store.tebex.io/package/pearls",
          images: [],
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
          ]
        },
        {
          id: "upnatom",
          enabled: true,
          name: "Up n Atom",
          description: "A beloved city burger joint with a retro feel and a strong local following. Fast service, high demand.",
          location: "TBD",
          type: "Food & Beverage",
          tebexLink: "https://your-store.tebex.io/package/upnatom",
          images: [
            "assets/images/businesses/upandatom-outside.png",
            "assets/images/businesses/upandatom-inside.png",
            "assets/images/businesses/upandatom-kitchen.png",
          ],
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
          ]
        },
      ]
    },

    // ══════════════════════════════════════════════════════
    // CLUBS
    // ══════════════════════════════════════════════════════
    {
      category: "Clubs",
      notice: "If you want to bring in your own MLO, please open a ticket with staff before buying anything from Tebex related to businesses. This is so staff can give you the go-ahead.",
      items: [
        {
          id: "vanilla-unicorn",
          enabled: false,
          name: "Vanilla Unicorn",
          description: "An upscale establishment with a loyal and recurring clientele. VIP access controls and private management tools included.",
          location: "Strawberry",
          type: "Entertainment / Nightlife",
          tebexLink: "https://your-store.tebex.io/package/vanilla-unicorn",
          images: [
            "assets/images/businesses/vu-outside.png",
            "assets/images/businesses/vu-outside2.png",
            "assets/images/businesses/vu-inside.png",
          ],
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
            { icon: "🔑", text: "VIP Access Controls — restrict and grant private area access" },
          ]
        },
        {
          id: "bahama-mamas",
          enabled: true,
          name: "Bahama Mamas",
          description: "The city's hottest nightclub. Premium sound system, full bar, and a constant stream of high-profile guests.",
          location: "TBD",
          type: "Entertainment / Nightlife",
          tebexLink: "https://your-store.tebex.io/package/bahama-mamas",
          images: [
            "assets/images/businesses/bahanamamas-inside.png",
            "assets/images/businesses/bahanamamas-inside2.png",
            "assets/images/businesses/bahanamamas-inside3.png",
            "assets/images/businesses/bahanamamas-inside4.png",
          ],
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
            { icon: "🔑", text: "VIP Access Controls — restrict and grant private area access" },
          ]
        },
      ]
    },

  ] // end businesses
};
