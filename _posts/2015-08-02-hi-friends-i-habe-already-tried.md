---
layout: post
title: HOW TO RENDER AMBIENT OCCLUSION PASS IN CYCLES - Lego Batmobile
date: '2015-08-02T02:27:00.002+03:00'
author: H.B.KENAR
tags:
- blender
- shadow pass
- worn edges
- blender3d
- batmobile
modified_time: '2015-08-02T19:52:00.152+03:00'
image:
  banner: http://1.bp.blogspot.com/-AGpUORUYqIw/Vb5A2US4i8I/AAAAAAAAANk/T-FbgHCo510/w1024/batmobile%2Bpark%2Barea%2Bp.jpg
  thumbnail: http://1.bp.blogspot.com/-AGpUORUYqIw/Vb5A2US4i8I/AAAAAAAAANk/T-FbgHCo510/s96/batmobile%2Bpark%2Barea%2Bp.jpg
blogger_id: tag:blogger.com,1999:blog-3661140495303223609.post-2422215956438209076
blogger_orig_url: http://www.icantblend.com/2015/08/hi-friends-i-habe-already-tried.html
---

Hi friends, i have already tried a compositing scene in Blender 3d cycles. I used my mini batmobile model with worn edges. Below you see the result.

<div class="figure">
![Batmobile](http://1.bp.blogspot.com/-AGpUORUYqIw/Vb5A2US4i8I/AAAAAAAAANk/T-FbgHCo510/w1024/batmobile%2Bpark%2Barea%2Bp.jpg)
Lego Batmobile Render Compositing Result
</div>

![Two layers](http://2.bp.blogspot.com/-_Ouuj5bawWk/Vb4BIndc_OI/AAAAAAAAANA/VQYEg7oBHKA/w1024/two%2Blayers.jpg){:.figure}

As you see above we have two layers. First is the Batmobile render with transparent background. The second is the floor and a light with transparent background.

![Layer Properties](http://1.bp.blogspot.com/-9WGVg8GfWj0/Vb5FOF1-zsI/AAAAAAAAAN4/jVFp_FKJ-d8/w1024/Layer%2Bproperties%2BAO%2BPass.jpg){:.figure}

At the upper image you see the Layer Properties. For the ambient occlusion layer be sure you checked AO.

![Node setup AO pass](http://4.bp.blogspot.com/-BVduNPWPb4M/Vb5GWdZPS5I/AAAAAAAAAOE/B_jadH6JWy4/w1024/hdri%2Bnode%2Bset%2Bup.png){:.figure}

You can tweak Mapping>Point>Rotation>Z value in order to have a good scene composition. Mine was 30 degree. Render the scene while there is no object in the scene. We are going to use that image at Compositing the Scene.

![Node setup AO pass](http://1.bp.blogspot.com/-57h39_uQmyk/Vb5ElIYSn_I/AAAAAAAAANw/CHyjF8yGQtA/w1024/NODE%2BSETUP%2BAO%2BPASS.png){:.figure}

The top render layer is the Batmobile render. The middle render layer is the ambient occlusion pass and the bottom render layer is the image layer that we obtained from hdri render we rendered before. Thanks for your interest. See you at another tutorial. Happy blendering folks!
