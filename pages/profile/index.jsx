import React from "react";

import Layout from "../../layout";
import PostsRow from "../../components/PostsRow";
import Avatar from "../../components/Avatar";
import SaveWordSize from "../../components/SaveWordSize";
import UserStaticts from "./UserStaticts";
import ProfileHeader from "./ProfileHeader";

const BIO_SIZE = 200; // Chracters

const bio = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus alias perspiciatis ullam eaque, nulla magnam placeat maiores, architecto dolorem nemo soluta id quos mollitia iusto obcaecati consequuntur similique. Vitae quod quae odit optio minima dignissimos illo maiores perferendis accusamus commodi dolorum facilis eligendi iusto atque, eaque nihil? Doloribus numquam nam tempora! Minus fuga recusandae quaerat! Quod nemo sunt voluptatibus eum labore facilis ad minus dolorum dignissimos at. A praesentium ducimus culpa sapiente veniam, error ratione tempore distinctio nulla facilis dolore harum quae tempora est, vero soluta voluptates minima ab vel ipsum porro fuga, ex quibusdam at. At soluta ab explicabo. Minus aspernatur iste totam qui quidem facilis, itaque repellendus quasi omnis esse ad maiores, est quo corrupti ipsum et nihil consectetur similique eveniet. Fugiat vel ullam, laborum sit ea vero veniam temporibus corrupti nobis nulla aut nemo explicabo laudantium doloremque. Autem repellendus veniam quasi quia sapiente veritatis nihil suscipit amet, inventore fugit nisi ab, placeat porro quo alias dolores perferendis enim earum consectetur asperiores nemo pariatur doloribus repudiandae a. Iusto nemo illo quasi minima, eveniet eius fuga repellat ipsa dolor, beatae nulla modi perferendis sint et vero itaque odit harum facere. Eius, necessitatibus suscipit tempore iusto temporibus officiis quod illum commodi praesentium corporis numquam maiores reprehenderit explicabo omnis itaque quibusdam eos ea exercitationem optio repudiandae voluptatibus facilis voluptatem porro! Veritatis eos quod culpa in enim voluptatibus quia doloremque? Enim dolorum facilis ex delectus mollitia reiciendis, voluptatibus, vitae tempora recusandae commodi molestias voluptatum sit in temporibus harum eligendi ipsam ducimus. Saepe eius repellendus rerum doloremque mollitia quam at quis blanditiis nihil debitis. Nisi vero est sapiente odio architecto accusamus nulla eligendi corrupti vitae deserunt! Cumque, sunt? Fugit voluptatem vero at. Quasi pariatur, doloremque quam ab deleniti ad sed assumenda, ea sit modi nemo? Quod iure dolorem officiis eveniet facere. Exercitationem, molestias.`;

const Profile = () => {
  return (
    <Layout className="container">
      <div className="personal-data d-block text-center text-md-start d-md-flex my-5 pt-3 pb-1 p-md-3 p-md-5 m-md-5 gap-5">
        <div className="avatar">
          <Avatar
            width={150}
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
          />
        </div>
        <div className="data">
          <ProfileHeader />

          <UserStaticts />
          <SaveWordSize caption={bio} className="bio" size={BIO_SIZE} />
        </div>
      </div>

      <hr />

      <PostsRow posts={[...Array(30)]} />
    </Layout>
  );
};

export default Profile;
