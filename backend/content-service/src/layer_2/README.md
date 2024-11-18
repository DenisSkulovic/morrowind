I have services to populate a world with blueprints and add/edit blueprints, but that only gives tools for content generation.

However, a huge part of world creation is actually creating instance of blueprints. Imagine recreating Seyda Neen with my framework. I would have to create specific locations (I'm not touching locations yet, of course), and then place very specific NPCs in different places, like the Ergalla guy. That Ergalla dude is an instance, but yet created in Layer 2, so that he always ends up in the same initial state into layer 3 when a Campaign is created.

So.
I also need an **Instance creation service**. Create instances and place them in the world, somehow. A whole different question is how I'm going to approach the world, 2D, 3D... Clearly I would prefer something simple like Rimworld. But more on that later.