
exports.up = function(knex) {
    const raw = `CREATE FUNCTION getCurrentUnixTimestamp() RETURNS bigint AS
                    $BODY$ begin
                        RETURN FLOOR(EXTRACT(EPOCH FROM current_timestamp AT TIME ZONE 'UTC'));
                    END; $BODY$
                 LANGUAGE plpgsql;`;
    return knex.schema.raw(raw);
};

exports.down = function(knex) {
  
};
