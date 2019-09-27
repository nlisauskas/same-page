# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_27_190533) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contractors", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "gender"
    t.datetime "birthdate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "expenses", force: :cascade do |t|
    t.string "source"
    t.float "amount"
    t.integer "investor_id"
    t.integer "tenant_id"
    t.integer "contractor_id"
    t.integer "property_id"
    t.integer "project_id"
    t.boolean "recurring"
    t.string "frequency"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "incomes", force: :cascade do |t|
    t.string "source"
    t.float "amount"
    t.integer "investor_id"
    t.integer "tenant_id"
    t.integer "contractor_id"
    t.integer "property_id"
    t.integer "project_id"
    t.boolean "recurring"
    t.string "frequency"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "investors", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "gender"
    t.datetime "birthdate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "payments", force: :cascade do |t|
    t.string "source"
    t.float "amount"
    t.integer "investor_id"
    t.integer "tenant_id"
    t.integer "contractor_id"
    t.integer "property_id"
    t.integer "project_id"
    t.boolean "recurring"
    t.string "frequency"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string "description"
    t.string "category"
    t.integer "contractor_id"
    t.integer "payment_id"
    t.integer "property_id"
    t.datetime "start_date"
    t.datetime "end_date"
    t.integer "claim_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "properties", force: :cascade do |t|
    t.string "street_1"
    t.string "street_2"
    t.string "city"
    t.string "state"
    t.integer "zipcode"
    t.integer "investor_id"
    t.datetime "purchase_date"
    t.datetime "sale_date"
    t.float "purchase_price"
    t.float "sale_price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tenants", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "gender"
    t.datetime "birthdate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
