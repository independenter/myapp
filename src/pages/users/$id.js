export default function(props) {
  var $id = props.match.params.id;
  return (
    <div>
      I am {$id}
    </div>
  );
}
